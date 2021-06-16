const axios = require('axios');
var fs = require('fs');

const clientId = process.env.API_KEY;
const clientSecret =  process.env.API_SECRET;
const grantType =  process.env.GRANT_TYPE;

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}


const token = () => {
    const options = {
        headers: {
                    'Connection': 'keep-alive',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Host': 'api.producthunt.com',  
                }
      };
    axios.post('https://api.producthunt.com/v2/oauth/token', {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: grantType
      }, options)
      .then((response) => {
        localStorage.setItem('token', response.data.access_token);
      }, (error) => {
        console.log(error);
      });
}


module.exports = token;