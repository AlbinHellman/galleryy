// apiModel
const fetch = require('node-fetch');
const apiUrl = 'https://gallery-now-api.grus.zone/';

const serviceApi = async (param) => {
    let promise = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(param) }
    )
    return promise;
}

module.exports = {
    serviceApi
}