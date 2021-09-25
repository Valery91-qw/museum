import {apiKey} from "./variable";

const mapElement = document.getElementById('map')

mapboxgl.accessToken = apiKey;
const map = new mapboxgl.Map({
    container: mapElement,
    style: 'mapbox://styles/mapbox/light-v10',
    center: [2.3364, 48.86091],
    zoom: 16,
});

new mapboxgl.Marker({color: 'black'})
    .setLngLat([2.3364, 48.86091])
    .addTo(map);

const mapMarkers = [[2.3333, 48.8602], [2.3397, 48.8607], [2.3330, 48.8619], [2.3365, 48.8625]];

mapMarkers.forEach(geoData => {
    new mapboxgl.Marker({color: 'gray'})
        .setLngLat(geoData)
        .addTo(map);
});

map.addControl(new mapboxgl.NavigationControl());