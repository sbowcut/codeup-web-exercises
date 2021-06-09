const mapBoxToken = 'pk.eyJ1Ijoic2Jvd2N1dCIsImEiOiJja3BwcGN3ZHcyeDZ2Mndtd3AzdGlkZTE1In0.B11vhML51Z-JmiVHlB7Jcg'
mapboxgl.accessToken = mapBoxToken

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-97.1081, 32.7357],
    zoom: 12
});

let marker = setMarker([-97.1081, 32.7357])

addMapEvent(marker);

function setMarker(point){
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

function addMapEvent(marker){
    map.on('click', function (e){
        console.log(e.lngLat);
        marker.setLngLat(e.lngLat).addTo(map);
    })
}