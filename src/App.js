import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import add from './add';

class HelloWorld extends Component {
  render () {
    return (
    <div className="hello-world">
    Hello World, {this.props.name}!
    </div>
);
  }
}



class App extends Component {
  render() {

    // Calculate sum from import
    const sum = add(200, 300);

    const users = [
     { _id: 1, name: 'Leia' },
     { _id: 2, name: 'Luke' },
     { _id: 3, name: 'Han' }
   ];


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          {users.map((user) => {
            return (
              <div>
              <HelloWorld name={user.name} key={user._id} />
                </div>
            );
          })}



      </div>
      </div>
    );
  }
}

export default App;
