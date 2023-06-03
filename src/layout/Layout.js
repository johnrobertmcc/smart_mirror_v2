import styles from './Layout.module.scss';
import { AUTHENTICATED_WIDGETS, UNAUTHENTICATED_WIDGETS } from './Layout.utils';
import { createElement, useLayoutEffect, useState } from 'react';
import { useSettingsContext } from 'context/SettingsContext';
import cn from 'classnames';

/**
 * Renders the layout with conditional widgest based on authentication status.
 *
 * @author  John Robert McCann
 * @since   11/15/2022
 * @version 1.0.0
 * @return  {Element}   The Authenticated layout.
 */
export default function Layout() {
  const [widgets, setWidgets] = useState([]);
  const { authenticated } = useSettingsContext();

  useLayoutEffect(() => {
    if (authenticated) {
      setWidgets(AUTHENTICATED_WIDGETS);
    } else {
      setWidgets(UNAUTHENTICATED_WIDGETS);
    }
  }, [authenticated]);

  return widgets.map((ele, i) => {
    const gridNum = `grid-${i + 1}`;
    if (!ele) {
      return <div className={cn(styles.gridComponent, styles[gridNum])}></div>;
    }
    return createElement(ele, {
      key: i,
      className: cn(styles.gridComponent, styles[gridNum]),
    });
  });
}
