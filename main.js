var map = L.map('map').setView([24.704420, 93.159927], 13);
//osm map layer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
osm.addTo(map);

//google hybrid
googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleHybrid.addTo(map);

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
OpenTopoMap.addTo(map);

//marker
var myIcon = L.icon({
        iconUrl: './pic/red_marker.png',
        iconSize: [40, 40],
    });
    var singleMarker = L.marker([24.704420, 93.159927], { icon: myIcon, draggable: true });
    var popup = singleMarker.bindPopup('Imphal West. ' + singleMarker.getLatLng()).openPopup()
    popup.addTo(map);

    var secondMarker = L.marker([24.903910, 94.038963], { icon: myIcon, draggable: true });

    console.log(singleMarker.toGeoJSON())

    //layer controller
    var baseMaps = {
    "OSM": osm,
    "Google hybrid": googleHybrid,
    "Open topo map": OpenTopoMap,
    
};

var overlayMaps = {
    "Marker": singleMarker
};
L.control.layers(baseMaps, overlayMaps).addTo(map);