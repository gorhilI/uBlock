/// blobc.js
document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    console.log('adding script')
    script.innerHTML = 'setTimeout(()=>{window.alert(69420);},500);';
    document.body.appendChild(script);
    console.log('done!')
});
