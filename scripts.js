var map = L.map('leafletMap').setView([40.714269, -74.005973], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var centers = mappingData.rows;

for (var i = 0; i < centers.length; i++) {
	var locationObj = centers[i];

	var marker = L.marker(locationObj.latitude, locationObj.longitude).addTo(map);

	marker.bindPopup("<b>" + locationObj.NameofCenter + "</b><br>" + locationObj.FullAddress);
} // end of for loop