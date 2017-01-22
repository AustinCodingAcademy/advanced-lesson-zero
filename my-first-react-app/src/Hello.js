//we need to import the first component to use react
import React from 'react';


//Here is a react component named Hello
//we must first define it as a react component to access library features
class Hello extends React.Component {
  //now we must render the component in the dom (this component must be called by the app)
    render() {
      //this is jsx, with it we can say what we intend to render in an xml like format
      //here we also create a prop. this prop is similar in invocation to an argument
      //it's an object placeholder we will use later, hence the semantic "prop" (I assume)
        return <h1 > Hello {this.props.name}! < /h1>;
    }
}
module.exports = Hello;
