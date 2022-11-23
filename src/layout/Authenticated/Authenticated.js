import styles from 'App.module.scss';
import { SUPPORTED_WIDGETS } from './Authenticated.utils';
import { createElement } from 'react';
/**
 * Renders the layout for Authenticated users.
 *
 * @author  John Robert McCann
 * @since   11/15/2022
 * @version 1.0.0
 * @return  {Element}   The Authenticated layout.
 */
export default function Authenticated() {
  return (
    <>
      {SUPPORTED_WIDGETS.map((ele, i) => {
        return createElement(ele, { key: i, className: styles.gridComponent });
      })}
    </>
  );
}
