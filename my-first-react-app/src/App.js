import React, { Component } from 'react';
import './App.css';
import Hello from './Hello.js';

class App extends Component {
  render() {

    const users = [
      {_id: 1, name:'Leia'},
      {_id: 2, name:'Luke'},
      {_id: 3, name:'Han'}
    ];
    return (
      <div className="greetings">
        {
          users.map(function(person){
            return <Hello key={person._id} name={person.name}/>;
          })
        }
      </div>
    );
  }
}

export default App;
