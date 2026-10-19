import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import elements from './elements.json';
import difficult from './difficulties.json';

let elem = elements.presentation;
let dif = difficult.difficulties;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrap">
      <App elem = {elem}  dif={dif}/>
    </div>
  </React.StrictMode>
);


