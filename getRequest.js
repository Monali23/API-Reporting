const axios = require('axios').default;

axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });