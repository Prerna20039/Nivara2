import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import "@fontsource/inder"; // Import Inder font

=======
import "bootstrap/dist/css/bootstrap.min.css";  // Keep Bootstrap
import "@fontsource/inder"; // Keep Inder font
>>>>>>> 368b03fab89f4675612fc5165f606ff2f94f18f4

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
