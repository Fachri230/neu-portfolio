import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Loads Tailwind + our global styles

// Finds <div id="root"> and renders the App component inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps catch bugs during development (no effect in production)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
