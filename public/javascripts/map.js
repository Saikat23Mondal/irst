mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fpa2F0MjNtb25kYWwiLCJhIjoiY2t0anIzaTR6MWVzMjJ3cW56N3JvOTNueSJ9._8mHBReQT0b4HKzxfEAgJA";
const lat = 22.650784;
const lng = 88.424747;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 14,
  center: [lng, lat],
});

const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
