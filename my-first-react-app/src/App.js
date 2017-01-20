import React, { Component } from 'react';
import './App.css';
import Hello from './hello.js';

class App extends Component {
  render() {

    const users = [
      {_id: 1, name:'Leia'},
      {_id: 2, name:'Luke'},
      {_id: 3, name:'Han'}
    ];
    return (
      <div>
        {
          users.map(function(person){
            return <Hello key={users.id} name={users.name}/>;
          })
        }
      </div>
    );
  }
}

export default App;
