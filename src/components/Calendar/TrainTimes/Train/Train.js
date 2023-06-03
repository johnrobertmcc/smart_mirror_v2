import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Train.module.scss';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

/**
 * Renders a component to display information about an individual train.
 *
 * @author  John Robert McCann
 * @since   06/03/2023
 * @version 1.0.0
 * @param   {object}  props      The component destructured as props.
 * @param   {string}  props.data The data of the singular upcoming train.
 * @return  {Element}            The Train component.
 */
export default function Train({ data }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    /**
     * Function used to parse the passsed data and determine from unix timestamp both the arrival and delay times.
     */
    function parseData() {
      const { time = '' } = data?.arrival;
      const parsedTime = dayjs.unix(time);
      setTime(parsedTime.toNow('mm'));
    }

    if (data?.arrival) {
      parseData();
    }
  }, [data]);

  if (time) {
    return <li className={styles.train}>{time}</li>;
  } else {
    return null;
  }
}
Train.propTypes = {
  data: PropTypes.shape({
    arrival: PropTypes.shape({
      delay: PropTypes.number,
      time: PropTypes.string,
      uncertainty: PropTypes.number,
    }),
  }),
};
Train.defaultProps = {
  data: {},
};
