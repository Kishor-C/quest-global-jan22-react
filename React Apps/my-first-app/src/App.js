import React, {Component} from 'react';
import './App.css';
import Button from './Button';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date : new Date()}
  }
  
  render() {
    return (<div>
      <p>Timer is: {this.state.date.toLocaleTimeString()}</p>
    </div>)
  }
}
function App() {
  
  return (<div className = 'container-fluid'>
      <Clock />
    </div>
  );
}

export default App;
