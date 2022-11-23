import styles from './Weather.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { fetchWeather } from 'functions/api';
/**
 * Renders the Weather Component
 *
 * @author  John Robert McCann
 * @since   11/15/2022
 * @version 1.0.0
 * @see     https://openweathermap.org/current
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.className The derived className for the component.
 * @return  {Element}                 The Weather component.
 */
export default function Weather({ className }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    /**
     * Wrapper callback used to fetch weather and apply it to state.
     */
    async function fetchWrap() {
      const weather = await fetchWeather();
      setWeather(weather);
    }
    fetchWrap();
  }, []);
  if (weather) {
    return (
      <ul className={cn(className, styles.weather)}>
        <li>
          Sunrise: {new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString()}
        </li>
        <li>
          Sunset: {new Date(weather?.sys?.sunset * 1000).toLocaleTimeString()}
        </li>
        <li>Weather: {weather?.weather?.[0]?.description}</li>
        <li>Feels like: {weather?.main?.feels_like}</li>
      </ul>
    );
  }

  return null;
}
