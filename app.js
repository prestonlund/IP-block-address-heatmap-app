// make map with tiles
const mymap = L.map('mapid').setView([0, 0], 1);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJlc3Rvbmx1bmQiLCJhIjoiY2trcm43djNtMDMyYzJ2cGhoOWplNnhmZiJ9.GA8oqmgNKELMpvY9Mszj7g', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

// fetch IPv4 addresses' latitude and longitudes API
// first URL is a CORS proxy to get around “No Access-Control-Allow-Origin header” error
// second is API hosted on Heroku
const api_url = 'https://dry-river-87601.herokuapp.com/https://ipv4heatmap.herokuapp.com/locations';
async function getLocations() {
    const response = await fetch(api_url);
    const data = await response.json();

    // store every latitude and longitude coordinates and intensity in new array
    const heatMapPoints = [];
    for (let i = 0; i < data.length; i++) {
        heatMapPoints.push([data[i][0], data[i][1], 1])
    }

    L.heatLayer(heatMapPoints, { radius: 25 }).addTo(mymap);
};
getLocations();
