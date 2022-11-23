import { useEffect, createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

// Initialize context object.
const SettingsProvider = createContext();

/**
 * Export useContext Hook to call on any Settings page.
 *
 * @author  John Robert McCann
 * @since   11/14/2022
 * @version 1.0.0
 * @return {Function} Settings context exported.
 */
export function useSettingsContext() {
  return useContext(SettingsProvider);
}
/**
 * Renders the sitewide settings context.
 *
 * @author  John Robert McCann
 * @since   11/16/2022
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.children  The children of the app.
 * @return  {Element}                 The SettingsContext component.
 */
export default function SettingsContext({ children, screen }) {
  const [authenticated, setAuthenticated] = useState(true);

  const value = {
    authenticated,
    today: dayjs(),
    screen,
  };

  return (
    <SettingsProvider.Provider value={value}>
      {children}
    </SettingsProvider.Provider>
  );
}
SettingsContext.propTypes = {
  children: PropTypes.node,
};
