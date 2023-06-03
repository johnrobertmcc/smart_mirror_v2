import Clock from 'components/Clock';
import styles from './App.module.scss';
import Layout from './layout';

/**
 * Simple Electron app used to render daily necessities from a variety of sources.
 *
 * @author  John Robert McCann
 * @since   11/16/2022
 * @version 1.0.0
 * @returns {Element} Renders the conditional layout depending on authenticated state.
 */
function App() {

  return (
    <main className={styles.main}>
      <Layout />
      <Clock />
    </main>
  );
}

export default App;
