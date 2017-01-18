import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = function() {
    return (
        <div>
            <h1>Hello React!</h1>
            <img src={require('./img/es6complete.png')} role="presentation" />
        </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
