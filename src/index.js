import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './structure/header';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);