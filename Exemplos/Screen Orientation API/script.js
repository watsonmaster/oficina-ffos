/*global alert*/

(function () {
    'use strict';

    var update = function () {
            var orientation = screen.mozOrientation;
            document.querySelector("#status").value = orientation;
        },
        
        lock = function () {
            if (!screen.mozLockOrientation(document.querySelector("#orientation-lock").value)) {
                alert("Não foi possível travar a orientação da tela");
            } else {
                document.querySelector("html").style.background = "#f00";
            }
        },
        
        unlock = function () {
            screen.mozUnlockOrientation();
            document.querySelector("html").style.background = "#00f";
        };
    
    document.onreadystatechange = function () {
        screen.addEventListener("mozorientationchange", update);
        document.querySelector("#lock").addEventListener("click", lock);
        document.querySelector("#unlock").addEventListener("click", unlock);
        update();
    };

}());