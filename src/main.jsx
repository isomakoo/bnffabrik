import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18n from './i18next'; // Import i18n configuration
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}> {/* Provide i18n to the app */}
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
