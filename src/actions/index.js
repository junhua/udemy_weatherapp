import axios from 'axios';

const API_KEY = '025e4e3672379ea82d39ac23b23b4e8c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Middleware: functions that action passed through before it reaches reducer

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // an action that the type is FETCH_WEATHER
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
