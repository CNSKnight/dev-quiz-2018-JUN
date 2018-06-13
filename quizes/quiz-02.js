const https = require('https');
const axios = require('../node_modules/axios');

const endpoint = 'https://www.cartoonnetwork.com/test/backend-quiz/games.json';

const pingViaCallback = (cb, err) => {
    let data = '';
    let processed;
    https.get(endpoint, (resp) => {
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            processed = data && JSON.parse(data);
            if (cb) {
                cb(processed);
            } else {
                return processed;
            }
        });
    }).on('error', (error) => {
        return (err && err(err)) || process.stderr.write(err);
    });
}

const pingViaPromise = () => {
    return axios.get(endpoint);
}

module.exports = { pingViaCallback, pingViaPromise };