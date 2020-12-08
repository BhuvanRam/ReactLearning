import logo from './logo.svg';
import './App.css';
import React from "react"

/* Below code renders via React.CreateElement */
/*
let helloReactElement = React.createElement('h1', { id: 'mainHeading', className: 'main-heading' }, 'Hello World !!! from React Create Element')
function App() {
  return helloReactElement
}
* /

/* Functional Component
let App = () => <h1>Hello World!!! Welcome to React from Functional Component</h1>
*/

/* Below code renders via JSX Syntax via Functional Component*/
/*
function App() {
  return (
    <div className="App">
        <h1>Hello World !!! Welcome to React Library </h1>
    </div>
  );
}
*/

/* Class Component via Component */
/*
class App extends React.Component {
  render() {
    return <h3>Hello World!!! from React Component</h3>
  }
}
*/

/*Class Component via Pure Component*/
class App extends React.PureComponent {
  render() {
    return <h3>Hello World!!! from React Pure Component</h3>
  }
}

export default App;
