import SettingsContext from 'context/SettingsContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SettingsContext>
      <App />
    </SettingsContext>
  </React.StrictMode>
);
