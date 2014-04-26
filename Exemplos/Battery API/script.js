/*global navigator, battery*/

(function () {
    'use strict';
    
    var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
    
    function updateBatteryStatus() {
        var nivel_container = document.querySelector('#nivel'),
            nivel = document.querySelector('progress'),
            status = document.querySelector('#status'),
            nivel_valor = battery.level * 100,
            tempo_carregamento,
            tempo_descarregamento;
        nivel_container.textContent = 'O nível da bateria é de ' + nivel_valor.toFixed(2) + ' %';
        nivel.value = battery.level;
        if (battery.charging) {
            if (battery.chargingTime > 0) {
                tempo_carregamento = battery.chargingTime / 60;
                status.textContent = 'Carregado em ' + tempo_carregamento.toFixed(2) + ' minutos';
            } else {
                status.textContent = 'Totalmente carregado';
            }
        } else {
            tempo_descarregamento = battery.dischargingTime / 60;
            status.textContent = 'Descarregando em ' + tempo_descarregamento.toFixed(2) + ' minutos';
        }
    }
    
    document.onreadystatechange = function () {
        if (navigator.battery) {
            battery.addEventListener('chargingchange', updateBatteryStatus);
            battery.addEventListener('dischargingtimechange', updateBatteryStatus);
            battery.addEventListener('chargingtimechange', updateBatteryStatus);
            battery.addEventListener('levelchange', updateBatteryStatus);
            updateBatteryStatus();
        } else {
            document.querySelector('#status').innerHTML = 'Seu navegador não suporta a Battery API';
        }
    };
    
}());
