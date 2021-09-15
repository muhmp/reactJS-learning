import React, { Component } from 'react';


//component
function HelloWorld() {
    return <span>Hello, World!</span>;
  }

  //render component
  <HelloWorld />

//prop
function Hello(props) {
    return <div>Hello, {props.who}!</div>;
  }

  /* 
  // Render prop
<Hello who="Earth" />

// Output prop
<div>Hello, Earth!</div>*/

//class component props
class HelloAsClass extends Component {
    render() {
        return <div>Hello, {this.props.who}!</div>;
    }
}
 
export default HelloAsClass;