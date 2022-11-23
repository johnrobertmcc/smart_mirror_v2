import Authenticated from './layout/Authenticated';
import Unauthenticated from './layout/Unauthenticated';
import Clock from 'components/Clock';
import styles from './App.module.scss';
import { useSettingsContext } from 'context/SettingsContext';

/**
 * Simple Electron app used to render daily necessities from a variety of sources.
 *
 * @author  John Robert McCann
 * @since   11/16/2022
 * @version 1.0.0
 * @returns {Element} Renders the conditional layout depending on authenticated state.
 */
function App() {
  const { authenticated } = useSettingsContext();
  return (
    <main className={styles.main}>
      {authenticated ? <Authenticated /> : <Unauthenticated />}
      <Clock />
    </main>
  );
}

export default App;
