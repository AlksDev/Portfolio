// index.js o index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeContextProvider } from './Context/ThemeContext';
import { LanguageContextProvider } from './Context/LanguageContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>,
);
