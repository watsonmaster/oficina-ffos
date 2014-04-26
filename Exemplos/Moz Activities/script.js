/*global MozActivity, alert*/

(function () {
    'use strict';

    var pickImage = function () {
        var pegarFoto = new MozActivity({
            name: "pick",
            data: {
                type: ["image/png", "image/jpg", "image/jpeg"],
                nocrop: true
            }
        });

        pegarFoto.onsuccess = function () {
            document.querySelector("#image-container").src = window.URL.createObjectURL(this.result.blob);
        };

        pegarFoto.onerror = function () {
            alert("Não é possível visualizar a imagem");
        };
    },

        pickAudio = function () {
            var pegarAudio = new MozActivity({
                name: "pick",
                data: {
                    type: ["audio/ogg"]
                }
            });

            pegarAudio.onsuccess = function () {
                document.querySelector("audio").remove();
                var container = document.querySelector("#container"),
                    audio = document.createElement("audio"),
                    source = document.createElement("source");
                source.setAttribute("src", window.URL.createObjectURL(this.result.blob));
                audio.setAttribute("controls", true);
                audio.setAttribute("autoplay", true);
                audio.appendChild(source);
                container.appendChild(audio);
            };

            pegarAudio.onerror = function () {
                alert("Não é possível carregar o audio");
            };
        };
    
    document.onreadystatechange = function () {
        document.querySelector("#image").addEventListener("click", pickImage);
        document.querySelector("#audio").addEventListener("click", pickAudio);
    };

}());