import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

var App = React.createClass({
  render: function() {
    return (
      <h1>Hello React!</h1>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
