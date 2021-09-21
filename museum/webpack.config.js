const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8080,
    }
}

let allHtmlFileName = ['index','tour1']

module.exports = ({ dev }) => ({
    mode: dev ? 'development' : 'production',
    devtool: dev ? 'inline-source-map' : false,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(?:png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: [MinCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MinCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        ...allHtmlFileName.map(name => {
            return new HtmlWebpackPlugin({
                template: path.resolve(__dirname, `./src/${name}.html`),
                filename: `${name}.html`
            })
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MinCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    ...devServer(dev),
});
