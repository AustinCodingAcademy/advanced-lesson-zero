import React from 'react';

class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

module.exports = Hello;
//makes Hello into a react module, and exports
