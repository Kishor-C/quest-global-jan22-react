import React, {Component, useState} from 'react';
import './App.css';
import Form from './Form'
function CounterComponent() {
  // initializing the state & creating a function that updates the state
  const [counter, setCounter] = useState(1);
  function addCounter() {
    setCounter(counter + 1);
  }
  return (<div>
    <h2>Simple counter state from function component</h2>
    <p>Counter: {counter}</p>
    <button onClick = {addCounter} className = 'btn btn-primary'>Add Counter</button>
  </div>)
}

function App() {
  return (<div className = 'container-fluid'>
    <div className = 'row'>
      <div className = 'col-4'>
        <Form />
      </div>
      <div className = 'col-4'>
        <CounterComponent />
      </div>
    </div>
    </div>
  );
}

export default App;
