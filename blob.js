/// blob.js
document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    console.log('test!')
    script.innerHTML = 'setTimeout(()=>{window.alert(123);},500);';
    document.body.appendChild(script);
    console.log('done!')
});
