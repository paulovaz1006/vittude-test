import React from 'react';
import ReactDOM from 'react-dom/client';
import  './assets/styles/global.scss';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
