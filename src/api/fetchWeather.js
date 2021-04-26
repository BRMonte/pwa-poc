import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e09d948d430987a6ee6b45d377aa9ce4';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    }
  });

  return data;
}
