import React, {Component} from 'react';
import axios from 'axios';
export class ReadAllEmployees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employees: []}
    }
    refresh = (e) => {
        axios.get("http://localhost:9090/employee")
        .then(response => this.setState({employees: response.data}))
        .catch(err => console.log(err));
    }
    render() {
        return (<div>
            <h2>Display all the employees</h2>
            <hr />
            <button onClick = {this.refresh} className = 'btn btn-primary'>Load</button>
            <table className = 'table table-striped'>
                <thead>
                    <tr>
                        <th>Sl No.</th><th>Id</th><th>Name</th><th>Salary</th><th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map((emp, index) => 
                        <tr key = {index}>
                            <td>{index + 1}</td><td>{emp.id}</td><td>{emp.name}</td><td>{emp.salary}</td>
                            <td><button className = 'btn btn-danger'>Delete</button></td>
                        </tr>)}
                </tbody>
            </table>
        </div>)
    }
}
export class StoreEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id : '', name : '', salary : '', message : '', errorMessage : ''}
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let emp = {id: this.state.id, name: this.state.name, salary: this.state.salary};
        axios.post('http://localhost:9090/employee', emp)
        .then(response => this.setState({message: response.data.id+ ' stored successfully'}))
        .catch(err => this.setState({errorMessage: 'Sorry something went wrong!'}));
        this.setState({id: '', name : '', salary: ''})

    }
    
    render() {
        return (<div>
            <h2>Employee Store Form</h2> <hr />
            <form onSubmit = {this.handleSubmit}>
                <div className = 'form-group'>
                    <label>
                        Enter Id <input type = 'number' value = {this.state.id} onChange = {(e) => this.setState({id: e.target.value})}
                        autoComplete = 'off' className = 'form-control'/>
                    </label>
                </div>
                <div className = 'form-group'>
                    <label>
                        Enter Name <input type = 'text' value = {this.state.name} onChange = {(e) => this.setState({name: e.target.value})}
                        autoComplete = 'off' className = 'form-control'/>
                    </label>
                </div>
                <div className = 'form-group'>
                    <label>
                        Enter Salary <input type = 'number' value = {this.state.salary} onChange = {(e) => this.setState({salary: e.target.value})}
                        autoComplete = 'off' className = 'form-control'/>
                    </label>
                </div>
                <hr />
                <div className = 'form-group'>
                    <button type = 'submit' className = 'btn btn-primary'>Submit</button>
                </div>
            </form>
            <div className = 'text-success'>{this.state.message}</div>
            <div className = 'text-alert'>{this.state.errorMessage}</div>
        </div>)
    }
}
export class UpdateEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: '', salary : '', message: '', errorMessage : ''};
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.state.id;
        let salary = this.state.salary;
        axios.put(`http://localhost:9090/employee/${id}/${salary}`)
        .then(response => {
            this.setState({message: response.data.message});
            this.setState({errorMessage: ''})
        })
        .catch(err => {
            this.setState({errorMessage: 'Sorry '+id+' not found'});
            this.setState({message: ''})
        });
    }
    render() {
        return (<div>
            <h3>Update Employee</h3><hr />
            <form onSubmit = {this.handleSubmit}>
                <div className = 'form-group'>
                    <div className = 'row'>
                        <div className = 'col'>
                            <label>
                                Enter id <input type = 'number' 
                                onChange = {(e) => this.setState({id: e.target.value})}
                                className = 'form-control' autoComplete = 'off'></input>
                            </label>
                        </div>
                        <div className = 'col'>
                            <label>
                                Enter salary <input type = 'number' 
                                onChange = {(e) => this.setState({salary: e.target.value})}
                                className = 'form-control' autoComplete = 'off'></input>
                            </label>
                        </div>
                    </div> 
                    <div className = 'row'>
                        <div className = 'col'>
                            <button className = 'btn btn-primary' type = 'submit'>Update</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className = 'text-success'>{this.state.message}</div>
            <div className = 'text-danger'>{this.state.errorMessage}</div>
        </div>)
    }
}