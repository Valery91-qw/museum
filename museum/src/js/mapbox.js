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

new mapboxgl.Marker({color: 'gray'})
    .setLngLat([2.3333, 48.8602])
    .addTo(map);

new mapboxgl.Marker({color: 'gray'})
    .setLngLat([2.3397, 48.8607])
    .addTo(map);

new mapboxgl.Marker({color: 'gray'})
    .setLngLat([2.3330, 48.8619])
    .addTo(map);

new mapboxgl.Marker({color: 'gray'})
    .setLngLat([2.3365, 48.8625])
    .addTo(map);

map.addControl(new mapboxgl.NavigationControl());