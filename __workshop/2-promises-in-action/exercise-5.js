const request = require('request-promise');

const getGeekJoke = async () => {

    try {
        let options = {
            uri: "https://geek-jokes.sameerkumar.website/api",
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }

        let quote = await request(options);

        let quoteJ = JSON.parse(quote);

        return quoteJ;
    }
    catch (err) { console.log(err) };


}

getGeekJoke().then(data => console.log(data));
