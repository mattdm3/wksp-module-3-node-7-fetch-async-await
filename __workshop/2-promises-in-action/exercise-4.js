const request = require('request-promise');

const getTronaldDump = async () => {

    try {
        const object = {
            uri: "https://api.tronalddump.io/random/quote",
            headers: {
                "Accept": "application/json"
            }
        }
        let quote = await request(object);
        let jsonQ = JSON.parse(quote);
        return jsonQ.value;
    }
    catch (err) { console.log(err) };

}



getTronaldDump().then(data => console.log(data));
