import PropTypes from 'prop-types';
import styles from './Calendar.module.scss';
import cn from 'classnames';
/**
 * Renders the Calendar Component
 *
 * @author  John Robert McCann
 * @since   11/15/2022
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.component The name of the component.
 * @return  {Element}                 The Calendar component.
 */
export default function Calendar({ component, className }) {
  return (
    <p className={cn(className, styles.calendar)}>{component} component</p>
  );
}
Calendar.propTypes = {
  component: PropTypes.string,
};
Calendar.defaultProps = {
  component: 'Calendar',
};
