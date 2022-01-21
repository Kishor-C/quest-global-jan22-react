import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function User() {
  const [user, setUser] = useState([]);
  let url = 'https://jsonplaceholder.typicode.com/users';
  
  function handleClick() {
    axios.get(url).then((response) => {
      setUser(response.data);
    });
  }
  return(<div>
    <h2>User information from JSON placeholder</h2>
    <button onClick = {handleClick}>Refresh</button>
    <table className = 'table table-stripted'>
      <thead>
        <tr>
          <th>Id</th><th>Name</th><th>Email</th>
        </tr>
      </thead>
      <tbody>
        {user.map((item, index) => <tr key = {index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
        </tr>)}
      </tbody>
    </table>
   
  </div>)
}

function App() {
  return (<div className = 'container-fluid'>
    <div className = 'row'>
      <div className = 'col'>
        <User />
      </div>
    </div>
    </div>
  );
}

export default App;
