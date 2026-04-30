(function(){
    'use strict';

    // add your script here

    var map = L.map('map').setView([37.879305,-122.040142], 13);
    var marker = L.marker([37.879305,-122.040142]).addTo(map);
    var marker2 = L.marker([37.891274,-122.125131]).addTo(map);
    var polygon = L.polygon([
        [37.876934,-122.044860],
        [37.875444,-122.034783],
        [37.865803,-122.036687]
    ]).addTo(map);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    marker.bindPopup("home!").openPopup();

    marker2.bindPopup("work!").openPopup();

    polygon.bindPopup("I like walking here :)");

}());