var map = L.map('map').setView([40.714269,-74.005973], 12);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var mappingDataArray = mappingData.rows;

for (var i=0; i<mappingDataArray.length; i++) {
	var locationObj = mappingDataArray[i];
	var marker = L.marker(locationObj.latitude,locationObj.longitude]).addTo(map);

var marker = L.marker([40.712261,-74.00492]).addTo(map);

	marker.bindPopup(+locationObj.NameofCenter+"<br>"+locationObj.FullAddress);