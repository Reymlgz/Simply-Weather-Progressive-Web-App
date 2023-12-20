import axios from 'axios'


const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = 'ab55902b9e2cab55bde987cf82c0b6f5' //Create a new one with a free account on https://api.openweathermap.org,

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}