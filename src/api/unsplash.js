import axios from 'axios';

export default axios.create({
    baseURL: "https://api.upsplash.com",
    headers:{
        Authorization: 'Client-ID ab90ecda4b4d1505343cf7d4a4c1c2e0170113165897d463d2dca45ca1a1f062'
    }
});