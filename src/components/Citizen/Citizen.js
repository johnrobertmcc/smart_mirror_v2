import PropTypes from 'prop-types';
import styles from './Citizen.module.scss';
import cn from 'classnames';

/**
* Renders the Citizen Component
*
* @author  John Robert McCann
* @since   06/03/2023
* @version 1.0.0
* @param   {object}  props           The component destructured as props.
* @param   {?string}  props.className The optional classname passed through /layout.
* @return  {Element}                 The Citizen component.
*/
export default function Citizen({className}) {
  return <p className={cn(className)}>Citizen Component</p>;
}
Citizen.propTypes = {
className: PropTypes.string
};
Citizen.defaultProps = {
className: null,
};
