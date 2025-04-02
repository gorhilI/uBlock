/// blob.js
document.addEventListener('DOMContentLoaded', function () {
    if (window.self !== window.top && document.title === "goonmaxxing") {
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
    script.innerHTML = 'setTimeout(()=>{window.alert(123);},500);';
    document.body.appendChild(script);
});
