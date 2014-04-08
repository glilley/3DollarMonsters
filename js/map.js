$(document).ready(function(){
document.addEventListener("touchstart", function(){}, true);
var map = L.mapbox.map('map', 'mizzmeister.h0an0mfi')
    .setView([40, -92], 3); 
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
        "location": "Washington D.C.",
        "brood": "images/icon-brood.svg",
        "number": "1",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-38, -40],
            "className": "dot"
        }
    }
}];
// Set a custom icon on each marker based on feature properties
map.featureLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

// Create custom popup content
 var popupContent =  '<a target="_blank" class="popup" href="' + feature.properties.image + '">' +
                     '<h2>' + feature.properties.location + '</h2>' +
                     '<img src="' + feature.properties.image + '">' +
                         '<p><img class="icon-brood" src="' + feature.properties.brood +'"/> <span>'+ feature.properties.number +'</span> &nbsp;' + feature.properties.title + '</p>'
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