const axios = require('axios').default;

const newPost = {
    userId: 1,
    title: 'A new post',
    body: 'This is the body of the new post'
};

const sendPostRequest = async () => {
    try {
        const resp = await axios.post('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22', newPost);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendPostRequest();