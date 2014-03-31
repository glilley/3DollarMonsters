$(document).ready(function(){
var map = L.mapbox.map('map', 'mizzmeister.h0an0mfi')
    .setView([40, -74.50], 5); 
    map.scrollWheelZoom.disable();
    // map.touchZoom.disable();
    // if (map.tap) map.tap.disable();
var geoJson = [{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-73.9495823,40.6501038]
    },
    "properties": {
        "title": "Do-Do Grapes",
        "image": "images/example.jpg",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -40],
            "className": "dot"
        }
    }
}];
// Set a custom icon on each marker based on feature properties
map.featureLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

// Create custom popup content
 var popupContent =  '<a target="_blank" class="popup" href="' + feature.properties.url + '">' +
                     '   <h2>' + feature.properties.title + '</h2>' +
                     '<img src="' + feature.properties.image + '">' +
                     '</a>';

marker.bindPopup(popupContent,{
        closeButton: false,
        maxWidth: 320,
        zoomAnimation: true
    });

    marker.setIcon(L.icon(feature.properties.icon));
});

// Add features to the map
map.featureLayer.setGeoJSON(geoJson);

});