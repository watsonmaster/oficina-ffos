/*global alert, Notification*/

(function () {
    'use strict';

    var request = function () {
        Notification.requestPermission(function (permission) {
            document.querySelector("#status").value = permission;
        });
    },
        show = function () {
            if (Notification.permission === "granted") {
                var title = document.querySelector("#title").value,
                    dir = document.querySelector("#dir").value,
                    lang = document.querySelector("#lang").value,
                    body = document.querySelector("#body").value,
                    icon = document.querySelector("#icon").value,
                    n = new Notification(title, {
                        dir: dir,
                        lang: lang,
                        body: body,
                        icon: icon
                    });
            } else {
                alert("Você não possui permissão para criar notificações");
            }
        };

    
    document.onreadystatechange = function () {
        document.querySelector("#request").addEventListener("click", request);
        document.querySelector("#show").addEventListener("click", show);
    };
    
}());
