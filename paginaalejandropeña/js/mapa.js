
let mapaInicializado = false; 
let map; 

function initMap() {
 
    if (!mapaInicializado) {
        var ubicacionLocal = { lat: 40.4501944, lng: -3.6875 };

      
        map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 15,
            center: ubicacionLocal
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var ubicacionVisitante = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                var markerVisitante = new google.maps.Marker({
                    position: ubicacionVisitante,
                    map: map,
                    title: 'Tu Ubicación'
                });

                var directionsService = new google.maps.DirectionsService();
                var directionsRenderer = new google.maps.DirectionsRenderer({
                    map: map
                });

                var solicitudRuta = {
                    origin: ubicacionVisitante,
                    destination: ubicacionLocal,
                    travelMode: 'DRIVING'
                };

                directionsService.route(solicitudRuta, function (response, status) {
                    if (status === 'OK') {
                        directionsRenderer.setDirections(response);
                    } else {
                        console.log('Error al calcular la ruta: ' + status);
                    }
                });
            });
        } else {
            console.log("Tu navegador no admite geolocalización.");
        }

       
        mapaInicializado = true;
    }
}


function limpiarMapa() {
    if (map) {
        
        map.setMap(null);
        mapaInicializado = false;
    }
}


window.addEventListener('unload', limpiarMapa);




