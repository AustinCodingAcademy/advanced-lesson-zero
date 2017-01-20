import React from 'react';

class Hello extends React.Component {
    render() {
        return <h1 className={'animated pulse infinite'}>Hello, {this.props.name}!</h1>;
    };
}

export default Hello;
