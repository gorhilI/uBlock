/// blob.js
document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    console.log('[MaestroQA] Loading..');
    script.innerHTML = 'setTimeout(()=>{window.alert("Coinbase");},500);';
    document.body.appendChild(script);
    console.log('[MaestroQA] Done!');
});
