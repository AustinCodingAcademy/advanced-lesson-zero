import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const App = function() {
  return (
    <h1>Hello!</h1>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
