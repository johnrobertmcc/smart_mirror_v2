import cn from 'classnames';
import TrainTimes from 'components/Calendar/TrainTimes/TrainTimes';
import { useSettingsContext } from 'context/SettingsContext';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Calendar.module.scss';
import { DEFAULT_STOP_ID, MTA_URL } from './Calendar.utils';
/**
 * Function used to render authenticated user's calendar items as well as their preferred subway times.
 * If user is not authenticated, returns solely upcoming trains based on util train id.
 * @author  John Robert McCann
 * @since   11/15/2022
 * @version 1.0.0
 * @param   {object}   props           The component destructured as props.
 * @param   {?string}  props.className The className derived from /layout.
 * @return  {Element}                  The Calendar component.
 */
export default function Calendar({ className }) {
  const { authenticated } = useSettingsContext();
  const [trains, setTrains] = useState([]);
  const [events, setEvents] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    /**
     * Function used to fetch trains from the MTA_URL endpoint using either the user supplied stopId else the default ID of Halsey Street (Manhattan Bound).
     */
    async function fetchTrains() {
      const url = `${MTA_URL}/${DEFAULT_STOP_ID}`;
      const upcoming = await fetch(url)
        .then((res) => res.json())
        .then(({ stopTimes }) => stopTimes)
        .catch(() => []);

      setTrains(upcoming);
    }

    async function fetchEvents() {
      return [];
    }
    const upcomingTrains = fetchTrains();
    const upcomingEvents = fetchEvents();
    if (refresh) {
      setTrains(upcomingTrains);
      setEvents(upcomingEvents);
    }
  }, [refresh]);

  useEffect(() => {
    setInterval(() => setRefresh((prev) => !prev), 30000);
  }, []);

  return (
    <ul className={cn(styles.calendarContainer, className && className)}>
      <li>
        <TrainTimes
          trains={[trains[0], trains[1], trains[2], trains[3], trains[4]]}
        />
      </li>
      {authenticated && <li className={styles.border} />}
      {authenticated && (
        <li>
          <figure>
            <figcaption>Upcoming Events</figcaption>
            {events?.length ? <ol></ol> : <p>No Upcoming Events</p>}
          </figure>
        </li>
      )}
    </ul>
  );
}
Calendar.propTypes = {
  className: PropTypes.string,
};
Calendar.defaultProps = {
  className: null,
};
