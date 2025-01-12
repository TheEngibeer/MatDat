import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import reportWebVitals from './utils/reportWebVitals';

//Styles
import './styles/Globals.css';
import './styles/Variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';          
import 'bootstrap/dist/js/bootstrap.bundle.min';        
import "@fortawesome/fontawesome-free/css/all.min.css"; //Ikoner


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter /> {/* Brug AppRouter her */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
