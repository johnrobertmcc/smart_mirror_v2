import {
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_REQUEST,
  NEWS_API_URL,
  NEWS_API_REQUEST,
  MONGODB_API_KEY,
} from 'constants/api';
import { WEATHER_ERROR } from 'constants/errors';
import axios from 'axios';
/**
 * Function used to fetch the weather from Open Weather API using the user's API keys.
 *
 * @author  John Robert McCann
 * @since   11/16/2022
 * @see     https://openweathermap.org/current
 * @returns {object} Returns the response as JSON from OpenWeather.
 */
export async function fetchWeather() {
  const queryParams = new URLSearchParams(OPEN_WEATHER_REQUEST);
  const url = OPEN_WEATHER_API_URL + queryParams;
  let weather;
  try {
    weather = await fetch(url).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  } catch (e) {
    console.error(WEATHER_ERROR);
    weather = null;
  }

  return weather;
}
