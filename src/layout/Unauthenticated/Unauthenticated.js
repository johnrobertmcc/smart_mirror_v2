import { createElement } from 'react';
import styles from 'App.module.scss';
import { SUPPORTED_WIDGETS } from './Unauthenticated.utils';
/**
 * Renders the Unauthenticated Component
 *
 * @author  John Robert McCann
 * @since   11/15/2022
 * @version 1.0.0
 * @return  {Element}     The Unauthenticated layout.
 */
export default function Unauthenticated() {
  return (
    <>
      {SUPPORTED_WIDGETS.map((ele, i) => {
        return createElement(ele, { key: i, className: styles.gridComponent });
      })}
    </>
  );
}
