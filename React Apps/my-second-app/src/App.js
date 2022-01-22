import logo from './logo.svg';
import './App.css';
import {ReadAllEmployees, StoreEmployee, UpdateEmployee} from './EmployeeCRUD';
function App() {
  return (
    <div className="container-fluid">
      <h2 className = 'text-center alert alert-primary'>React calling APIs with axios</h2> <hr />
      <div className = 'row'>
        <div className = 'col'>
          <StoreEmployee />
        </div>
        <div className = 'col'>
          <ReadAllEmployees />
        </div>
      </div>
      <div className = 'row'>
        <div className = 'col-4'>
          <UpdateEmployee />
        </div>
      </div>
    </div>
  );
}

export default App;
