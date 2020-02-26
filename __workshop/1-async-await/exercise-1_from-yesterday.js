// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS


const getIssPosition = async () => {
    try {
        let data = await request('http://api.open-notify.org/iss-now.json');
        let parsedData = JSON.parse(data);
        const { longitude, latitude } = parsedData.iss_position;
        let newObject = { lat: latitude, lng: longitude, };
        console.log(newObject);

    } catch (err) {
        console.log(err);
    }
}


getIssPosition();

