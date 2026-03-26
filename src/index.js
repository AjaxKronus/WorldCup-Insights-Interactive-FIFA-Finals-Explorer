import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import gameData from './data/fifa-matches-2018.json';

ReactDOM.render(
  <React.StrictMode>
    <App gameData={gameData} />
  </React.StrictMode>,
  document.getElementById('root')
);