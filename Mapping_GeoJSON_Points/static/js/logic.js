// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    //pointToLayer: function(feature, latlng) {
     // console.log(feature);
     // return L.marker(latlng)
     // .bindPopup("<h2>" + feature.properties.city + ", " + feature.properties.country + "<hr>" + feature.properties.name + "</h2>");
   // }

 // }).addTo(map);

 L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "<hr>" + feature.properties.name + "</h2>");
     }
}).addTo(map);

//let line = [
    
   // [37.615983, -122.392477],
   // [30.1974292, -97.6663058],
//[43.6777176, -79.6248196],
  //  [40.641766, -73.780968]
    
//];


// Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
//dashArray: '20,15',
   // color: "blue"
 // }).addTo(map);
//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);


//We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
