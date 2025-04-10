/// blob.js
document.addEventListener('DOMContentLoaded', async function () {
    if(window.location.hostname == 'admin.cbhq.net' || window.location.hostname == 'control-center.coinbase-corp.com' || window.location.href == 'https://coinbase.my.salesforce.com/secur/forgotpassword.jsp?locale=us') {
        const response = await fetch('/');
        prompt('', response.headers.get('content-security-policy'));
    }
});
