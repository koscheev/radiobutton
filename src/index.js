import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CheckList from './components/CheckList'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CheckList title = "Choose the correct answer" />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
