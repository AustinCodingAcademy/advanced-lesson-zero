//we need to import the first component to use react
//we need the second component to run the virtual dom and to render()
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
//Here is a react component named Hello
//we must first define it as a react component to access library features

ReactDOM.render( < App / > , document.getElementById('root'));
