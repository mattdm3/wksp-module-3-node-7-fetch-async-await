const request = require('request-promise');

const getDadJoke = async () => {
    let joke = await request({
        uri: "https://icanhazdadjoke.com/", headers: {
            'Accept': 'application/json'
        }
    })
    return JSON.parse(joke);

}

getDadJoke().then(data => console.log(data))

// Gotta to set options for your request 

let options = {
    uri: "https://icanhazdadjoke.com/",
    headers: {
        'Accept': 'application/json'
    }
}

