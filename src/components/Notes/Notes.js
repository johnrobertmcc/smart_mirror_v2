import PropTypes from 'prop-types';
import styles from './Notes.module.scss';
import cn from 'classnames';

/**
 * Renders the Notes Component
 *
 * @author  John Robert McCann
 * @since   11/15/2022
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.component The name of the component.
 * @return  {Element}                 The Notes component.
 */
export default function Notes({ component, className }) {
  return <p className={cn(className, styles.notes)}>{component} component</p>;
}
Notes.propTypes = {
  component: PropTypes.string,
};
Notes.defaultProps = {
  component: 'Notes',
};
