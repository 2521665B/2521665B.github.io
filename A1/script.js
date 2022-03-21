/*Data downloaded from https://data.police.uk*/
mapboxgl.accessToken =
  "pk.eyJ1IjoiMjUyMTY2NWIiLCJhIjoiY2t6eTdvd2kzMDJ6bjJ2cGNraDUzMGYybyJ9.zuLdJGv8hvwivqVeNLcNAA";

//Before map
const beforeMap = new mapboxgl.Map({
  container: "before",
  style: "mapbox://styles/2521665b/cl0zwa0kv000114ocmkwemcp6",
  center: [-4.2518, 55.8642],
  zoom: 13
});
beforeMap.on('click', (event) => {
const features = beforeMap.queryRenderedFeatures(event.point, {
layers: ['assessment1_Cycling']
});
if (!features.length) {
return;
}
const feature = features[0];
 
const popup = new mapboxgl.Popup({ offset: [0, -15] })
.setLngLat(feature.geometry.coordinates)
.setHTML(
`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
)
.addTo(beforeMap);
});
//After map
const afterMap = new mapboxgl.Map({
  container: "after",
  style: "mapbox://styles/2521665b/cl0zw77n5005s14o0evzckh6z",
  center: [-4.2518, 55.8642],
  zoom: 13
});
afterMap.on('click', (event) => {
const features = afterMap.queryRenderedFeatures(event.point, {
layers: ['assessment1_pedestrian']
});
if (!features.length) {
return;
}
const feature = features[0];
 
const popup = new mapboxgl.Popup({ offset: [0, -15] })
.setLngLat(feature.geometry.coordinates)
.setHTML(
`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
)
.addTo(afterMap);
});

afterMap.addControl(new mapboxgl.NavigationControl());

// A selector or reference to HTML element
const container = "#comparison-container";
const map = new mapboxgl.Compare(beforeMap, afterMap, container, {});