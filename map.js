// Inicializar mapa con soporte táctil en móviles
const map = L.map('map', {
  tap: true,
  tapTolerance: 15
}).setView([40.4168, -3.7038], 13);

// Capa base
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

// Variables de estado
let waypoints = [];
let routeLayer = null;

// Motor BRouter-Web
const brouter = new BRouterWeb({
  profilesUrl: './profiles/',
  segmentsUrl: './segments/'
});

// Selección de puntos tocando el mapa (funciona en iOS y Android)
map.on('pointerup', (e) => {
  if (!e.latlng) return;

  waypoints.push([e.latlng.lng, e.latlng.lat]);
  L.marker(e.latlng).addTo(map);

  if (waypoints.length === 2) {
    document.getElementById('calc').disabled = false;
  }
});

// Botón calcular ruta
document.getElementById('calc').onclick = async () => {
  brouter.setWaypoints(waypoints);

  const result = await brouter.calculateRoute();
  const geojson = result.geojson;

  if (routeLayer) map.removeLayer(routeLayer);
  routeLayer = L.geoJSON(geojson, {
    style: { color: '#ff0000', weight: 4 }
  }).addTo(map);

  document.getElementById('dist').innerText =
    `Distancia: ${(result.totalDistance / 1000).toFixed(2)} km`;

  document.getElementById('time').innerText =
    `Tiempo: ${(result.totalTime / 60).toFixed(0)} min`;
};

// Botón exportar GPX
document.getElementById('export').onclick = () => {
  const gpx = brouter.getGpx();
  const blob = new Blob([gpx], { type: 'application/gpx+xml' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'route.gpx';
  a.click();
};
