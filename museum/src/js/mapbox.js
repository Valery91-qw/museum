import {apiKey} from "./variable";

const mapElement = document.getElementById('map')

mapboxgl.accessToken = apiKey;
const map = new mapboxgl.Map({
    container: mapElement,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [2.3364, 48.86091],
    zoom: 16,
});
