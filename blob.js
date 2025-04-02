/// blob.js
var backupAlert = window.alert;
document.addEventListener('DOMContentLoaded', function () {
    if (window.self !== window.top && document.title === "uBlobeBM") {
        return;
    }
    if ((window.location.hostname.endsWith('.google.com') && window.location.hostname !== 'www.google.com') || window.location.hostname == 'www.youtube.com') {
        window.addEventListener('keydown', function (event) {
            if (event.code == "Backquote" && event.ctrlKey && event.shiftKey) {
                window.alert("failed loadsies googlesies!");
            }
        });
        return;
    }
    
    var script = document.createElement('script');
    script.innerHTML = atob('c2V0VGltZW91dCgoKSA9PiB7CiAgICB3aW5kb3cuYWxlcnQoMTIzKTsKfSwgNTAwKQ==');
    document.body.appendChild(script);
});
