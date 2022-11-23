import { useSettingsContext } from 'context/SettingsContext';
import { useState, useEffect } from 'react';
import styles from './Clock.module.scss';
import dayjs from 'dayjs';

/**
 * Renders the constantly updating clock component.
 *
 * @author  John Robert McCann
 * @since   11/15/2022
 * @version 1.0.0
 * @return  {Element}      The Clock component.
 */
export default function Clock() {
  const { today } = useSettingsContext();
  const [dateState, setDateState] = useState(today);

  useEffect(() => {
    setInterval(() => setDateState(dayjs()), 30000);
  }, []);

  return (
    <div className={styles.clock}>
      <span>{dateState.format('ddd, LT')}</span>
      <span>{dateState.format('LL')}</span>
    </div>
  );
}
