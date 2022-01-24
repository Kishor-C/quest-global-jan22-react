import logo from './logo.svg';
import './App.css';
import {ReadAllEmployees, StoreEmployee, UpdateEmployee} from './EmployeeCRUD';
import {Route, Link, Routes} from 'react-router-dom';
import React from 'react';

class Main extends React.Component {
  render() {
    return (<div>
        <div>
          <Link to = '/store'>Store</Link> /
          <Link to = '/update'>Update</Link> /
          <Link to = '/fetchAll'>Fetch All</Link> /
      </div>
    </div>)
  }
}
class AppRouter extends React.Component {
  render() {
    return (<div>
      <Routes>
        <Route path = '/' element = {<StoreEmployee />} /> 
        <Route path = '/store' element = {<StoreEmployee />} /> 
        <Route path = '/update' element = {<UpdateEmployee />} /> 
        <Route path = '/fetchAll' element = {<ReadAllEmployees />} /> 
      </Routes>
    </div>)
  }
}

function App() {
  return (
    <div className="container-fluid">
      <h2 className = 'text-center alert alert-primary'>React calling APIs with axios</h2>    
      <div className = 'row'>
        <div className = 'col'>
          <Main />
        </div>
      </div>  
      <div className = 'row'>
        <div className = 'col-6'>
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
