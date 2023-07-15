const ENDPOINT = 'http://ancient-taiga-31359.herokuapp.com/api/houses';

fetch(ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Fetch House'
    })
})

fetch(ENDPOINT)
    .then(res => res.json())
    .then(res => {
        res.forEach(house => document.write(house.name + '<br>'));
    })