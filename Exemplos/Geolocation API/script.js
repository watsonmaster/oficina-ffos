/*global geolocation, google, alert*/

(function () {
    'use strict';
    
    var sucesso = function (position) {
        var latitude = document.querySelector("#latitude"),
            longitude = document.querySelector("#longitude"),
            horario = document.querySelector("#horario"),
            altitude = document.querySelector("#altitude"),
            precisao = document.querySelector("#precisao"),
            precisao_altitude = document.querySelector("#precisao-altitude"),
            direcao = document.querySelector("#direcao"),
            velocidade = document.querySelector("#velocidade"),
            latlong =  new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
            mapOptions = {
                center: latlong,
                zoom: 15
            },
            map = new google.maps.Map(document.getElementById("map-canvas"),  mapOptions),
            marker = new google.maps.Marker({
                position: latlong,
                map: map,
                title: 'Eu estou aqui!'
            });

        horario.textContent += new Date(position.timestamp).toLocaleFormat();
        latitude.textContent += position.coords.latitude;
        longitude.textContent += position.coords.longitude;
        altitude.textContent += position.coords.altitude + " metros";
        precisao.textContent += position.coords.accuracy + " metros";
        precisao_altitude.textContent += position.coords.altitudeAccuracy + " metros";
        direcao.textContent += position.coords.heading + " graus";
        velocidade.textContent += position.coords.speed + " m/s";

    },

        falha = function (positionError) {
            alert(positionError.code +  ", " + positionError.message);
        };
    
    document.onreadystatechange = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(sucesso, falha, {enableHighAccuracy: true});
        }
    };
    
}());