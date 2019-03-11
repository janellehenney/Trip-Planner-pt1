console.log('Hello from JavaScript');

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');

mapboxgl.accessToken =
  'pk.eyJ1IjoiamFuZWxsZWhlbm5leSIsImEiOiJjanQ0aWUxamkxNXI2M3lwaG10eHhtMmdvIn0.fBkip2J5F6bYpLgi4kPjeg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map);

const frontera = buildMarker('restaurants', [-87.6308, 41.8905]);
frontera.addTo(map);
