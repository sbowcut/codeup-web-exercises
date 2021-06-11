const mapBoxToken = 'pk.eyJ1Ijoic2Jvd2N1dCIsImEiOiJja3BwcGN3ZHcyeDZ2Mndtd3AzdGlkZTE1In0.B11vhML51Z-JmiVHlB7Jcg'
mapboxgl.accessToken = mapBoxToken

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-97.1081, 32.7357],
    zoom: 1
});

let marker = setMarker([-97.1081, 32.7357])

addMapEvent(marker);

let geocoder = setGeocoder();
addGeocoder(geocoder);
addGeocoderEvent(geocoder);
setPopup("This is my popup!")

function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false

    })
}

function addGeocoderEvent(){
geocoder.on("result", function (e){
    marker.setLngLat(e.result.geometry.coordinates)
    e.result.place_name
})
}

function addGeocoder(geocoder) {
    map.addControl(geocoder);
}

function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

function addMapEvent(marker) {
    map.on('click', function (e) {
        console.log(e.lngLat);
        marker.setLngLat(e.lngLat).addTo(map);
    })
}
function setPopup(textField){
    let popup = new mapboxgl.Popup().setHTML(`<p>${textField}</p>`).addTo(map);
    marker.setPopup(popup)
}