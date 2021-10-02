console.log('Client-side code running');

const output = document.getElementById("output");

window.addEventListener('DOMContentLoaded', () => {
    const recordForm = document.getElementById("recordForm");
    recordForm.addEventListener("submit", async event => {
        event.preventDefault();
        let longUrl = document.getElementById('longUrl').value;
        let shortUrl = document.getElementById('shortUrl').value;
        try {
            let usefulVar = 0;
            let res = await fetch('/v1/shorturl', {
            method: 'POST',
            body: 
            JSON.stringify({
                "longUrl" : longUrl,
                "shortUrl" : shortUrl
            }),
            headers: {'Content-Type': 'application/json'}
            });
            if (!res.ok) {
            output.textContent = res.status;
            }
            else {
            let data = await res.json();
            console.log(data);
            output.textContent = JSON.stringify(data.shortUrl);
            }
        }
        catch (e) {
        output.textContent = e;
        }
    });
});
