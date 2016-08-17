import axios from'axios'


/**ES6 Template strings
* use  `` (backtick) to template a string with variables. Fancy Concatenation
*/

const API_KEY = '4f39976db222378291e2b24458625068';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` 

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  }
}