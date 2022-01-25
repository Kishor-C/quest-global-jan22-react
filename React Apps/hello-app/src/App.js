import logo from './logo.svg';
import './App.css';
import React, {PureComponent, Component} from 'react';

class Demo1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {name : 'Alex'}
  }
  render() {
    console.log('pure component state: ', this.state.name);
    return (<div>
      <button onClick = {() => this.setState({name : 'Charles'})}>Pure Component </button>
    </div>)
  }
}
class Demo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name : 'Alex'}
  }
  render() {
    console.log('normal component state: ', this.state.name);
    return (<div>
      <button onClick = {() => this.setState({name : 'Charles'})}>Normal Component </button>
    </div>)
  }
}

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <Demo1 />
      <Demo2 />
    </div>
  );
}

export default App;
