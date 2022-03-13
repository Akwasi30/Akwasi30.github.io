mapboxgl.accessToken= 'pk.eyJ1IjoiYWt3YXNpMzAiLCJhIjoiY2t6aG5wN2Q1NDNndTJvcDQ0ZzBkbzQyOSJ9.Om7ek_mM4fe3ClIt_IrOIw'

// lngLat New York University
var nyu = [-73.997453,40.730842]

var map = new mapboxgl.Map({
  container:'mapContainer', // HTML container id
  style:'mapbox://styles/mapbox/dark-v9', // style URL
  center: nyu, //starting position as [lng, lat]
  maxzoom: 11
  //minZoom: 9,
  // maxZoom:14,
});

map.on ('load', function () {
map.addSource('national-transit-map', {
type: 'geojson',
//Use a URL for the value for the data property.
data: '/data/national-transit-map.geojson'
});


map.addLayer({
'id': 'national-transit-map',
'type': 'circle',
'source': 'national-transit-map',
'paint': {
  'circle-color': 'greenyellow',

}
});
})
map.on ('load', function () {
map.addSource('amtrak-routes', {
type: 'geojson',
//Use a URL for the value for the data property.
data: '/data/amtrak-routes.geojson'
});

map.addLayer({
'id': 'amtrak-routes',
'type': 'line',
'source': 'amtrak-routes',
'paint': {
  'line-color': 'crimson',


}
});
})
