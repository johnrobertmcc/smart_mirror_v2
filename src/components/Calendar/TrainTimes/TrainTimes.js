import PropTypes from 'prop-types';
import Train from './Train/Train';
import styles from './TrainTimes.module.scss';
/**
 * Renders upcoming trains based on User preference.
 *
 * @author  John Robert McCann
 * @since   06/03/2023
 * @version 1.0.0
 * @param   {object}  props        The component destructured as props.
 * @param   {Array}   props.trains An array of upcoming trains to display.
 * @return  {Element}              The TrainTimes component.
 */
export default function TrainTimes({ trains }) {
  return (
    <figure className={styles.trainsFigure}>
      <figcaption>Upcoming Trains</figcaption>
      {trains?.length ? (
        <ol>
          {trains.map((train, i) => (
            <Train data={train} key={i}/>
          ))}
        </ol>
      ) : (
        <p>No Upcoming Trains</p>
      )}{' '}
    </figure>
  );
}
TrainTimes.propTypes = {
  trains: PropTypes.arrayOf(PropTypes.shape({})),
};
TrainTimes.defaultProps = {
  trains: [],
};
