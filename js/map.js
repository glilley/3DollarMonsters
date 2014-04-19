$(document).ready(function(){
document.addEventListener("touchstart", function(){}, true);
var map = L.mapbox.map('map', 'mizzmeister.h0an0mfi', {maxZoom: 10}).setView([40, -92], 3); 
    // map.scrollWheelZoom.disable();
    // map.touchZoom.disable();
    // if (map.tap) map.tap.disable();
var geoJson = [{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-118.11,33.80]
    },
    "properties": {
        "title": "Banana Brains Yellow",
        "image": "monsters/2014_B_01_001_BananaBrainsYellow.jpg",
        "location": "Long Beach, CA",
        "brood": "images/icon-brood.svg",
        "number": "1",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-72, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-118.095,33.88]
    },
    "properties": {
        "title": "Fluorescent Green Owl",
        "image": "monsters/2014_B_01_002_FluorescentGreenOwl.jpg",
        "location": "Long Beach, CA",
        "brood": "images/icon-brood.svg",
        "number": "2",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-118.004,34.0487]
    },
    "properties": {
        "title": "Coral The Cactus",
        "image": "monsters/2014_B_01_003_CoralTheCactus.jpg",
        "location": "La Puente, CA",
        "brood": "images/icon-brood.svg",
        "number": "3",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-118.0183,33.825]
    },
    "properties": {
        "title": "Dark Crimson Avocado",
        "image": "monsters/2014_B_01_004_DarkCrimsonAvocado.jpg",
        "location": "Cypress, CA",
        "brood": "images/icon-brood.svg",
        "number": "4",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-122.0,38.37]
    },
    "properties": {
        "title": "Razzlepop Red",
        "image": "monsters/2014_B_01_005_RazzlepopRed.jpg",
        "location": "Vacaville, CA",
        "brood": "images/icon-brood.svg",
        "number": "5",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-122.1850,38.3769]
    },
    "properties": {
        "title": "Blue Bonanza",
        "image": "monsters/2014_B_01_006_BlueBonanza.jpg",
        "location": "Vacaville, CA",
        "brood": "images/icon-brood.svg",
        "number": "6",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-122.09,38.3]
    },
    "properties": {
        "title": "Platypus Purple",
        "image": "monsters/2014_B_01_007_PlatypusPurple.jpg",
        "location": "Vacaville, CA",
        "brood": "images/icon-brood.svg",
        "number": "7",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-118.09,33.75]
    },
    "properties": {
        "title": "Blue Waffle",
        "image": "monsters/2014_B_01_008_BlueWaffle.jpg",
        "location": "Long Beach, CA",
        "brood": "images/icon-brood.svg",
        "number": "8",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-118.09,33.75]
    },
    "properties": {
        "title": "Pretzelcoatl",
        "image": "monsters/2014_B_01_009_Pretzelcoatl.jpg",
        "location": "Santa Ana, CA",
        "brood": "images/icon-brood.svg",
        "number": "9",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-90.20,29.95]
    },
    "properties": {
        "title": "Jerome",
        "image": "monsters/2014_B_01_010_Jerome.jpg",
        "location": "River Ridge, LA",
        "brood": "images/icon-brood.svg",
        "number": "10",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-77.040,38.9263]
    },
    "properties": {
        "title": "Blood Orange",
        "image": "monsters/2014_B_01_011_BloodOrange.jpg",
        "location": "Washington D.C.",
        "brood": "images/icon-brood.svg",
        "number": "11",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-77.061,38.943]
    },
    "properties": {
        "title": "Turquoise",
        "image": "monsters/2014_B_01_012_Turquoise.jpg",
        "location": "Washington D.C.",
        "brood": "images/icon-brood.svg",
        "number": "12",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-77.026,38.897]
    },
    "properties": {
        "title": "Grumble Grey",
        "image": "monsters/2014_B_01_013_GrumbleGrey.jpg",
        "location": "Washington D.C.",
        "brood": "images/icon-brood.svg",
        "number": "13",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-122.403,37.765]
    },
    "properties": {
        "title": "Harrowing Hints Of Aqua",
        "image": "monsters/2014_B_01_014_HarrowingHintsOfAqua.jpg",
        "location": "San Francisco, CA",
        "brood": "images/icon-brood.svg",
        "number": "14",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-77.0293,38.933]
    },
    "properties": {
        "title": "Gelatinous Cube Green",
        "image": "monsters/2014_B_01_015_GelatinousCubeGreen.jpg",
        "location": "Washington D.C.",
        "brood": "images/icon-brood.svg",
        "number": "15",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-117.595,33.43]
    },
    "properties": {
        "title": "Apple Fritter",
        "image": "monsters/2014_B_01_016_AppleFritter.jpg",
        "location": "San Clemente, CA",
        "brood": "images/icon-brood.svg",
        "number": "16",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-118.099,33.737]
    },
    "properties": {
        "title": "Red",
        "image": "monsters/2014_B_01_017_Red.jpg",
        "location": "Seal Beach, CA",
        "brood": "images/icon-brood.svg",
        "number": "17",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-77.022,38.955]
    },
    "properties": {
        "title": "Cool Salamander",
        "image": "monsters/2014_B_01_018_CoolSalamander.jpg",
        "location": "Washington D.C.",
        "brood": "images/icon-brood.svg",
        "number": "18",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-118.146,33.769]
    },
    "properties": {
        "title": "Captn Carl Celadon",
        "image": "monsters/2014_B_01_019_CaptnCarlCeladon.jpg",
        "location": "Long Beach, CA",
        "brood": "images/icon-brood.svg",
        "number": "19",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-122.165,37.736]
    },
    "properties": {
        "title": "Pea Soup and Ham Goblin",
        "image": "monsters/2014_B_01_020_PeaSoupAndHamGoblin.jpg",
        "location": "San Leandro, CA",
        "brood": "images/icon-brood.svg",
        "number": "20",
        "icon": {
            "iconUrl": "images/marker-icon-eye.svg",
            "iconSize": [40, 40],
            "iconAnchor": [20, 40],
            "popupAnchor": [-68, -55],
            "className": "dot"
        }
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
    "coordinates": [-109.3667,-27.1167]
    },
    "properties": {
        "title": "You're dedicated! Be the first to post 'Happy Rapa Nui!' on our Instagram or Twitter to get your free monster!",
        "image": "images/icon-brood-egg-3.svg",
        "location": "Easter Island",
        // "brood": "images/icon-brood.svg",
        "number": "3",
        "icon": {
            "iconUrl": "images/marker-icon-egg.svg",
            "iconSize": [10, 10],
            "iconAnchor": [10, 20],
            "popupAnchor": [-68, -55],
            "className": "easter"
        }
    }
}
];
// Set a custom icon on each marker based on feature properties
map.featureLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

// Create custom popup content
 var popupContent =  '<a target="_blank" class="popup" href="' + feature.properties.image + '">' +
                     '<h2>' + feature.properties.location + '</h2>' +
                     '<img src="' + feature.properties.image + '">' +
                     '<div>' + '<p class="icon-brood-count"><img class="icon-brood" src="' + feature.properties.brood +'"/>' + '<span>'+ feature.properties.number +'</span></p>' + '<p>' + feature.properties.title + '</p>' + '</div>' + '</a>';

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