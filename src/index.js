import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import elements from './elements.json';
import { BrowserRouter } from 'react-router-dom';

let elem = elements.presentation;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="wrap">
      <App elem = {elem} />
    </div>
    </BrowserRouter>
  </React.StrictMode>
);


