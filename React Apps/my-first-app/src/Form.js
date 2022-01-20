import React, {Component} from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {_id: '', name : '', salary: ''}
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        
    }
    handleInput = (event) => {
        // object destructure syntax
        this.setState({
            [event.target.name] : event.target.value
        })
        // let name = event.target.name;
        // let value = event.target.value;
        // switch(name) {
        //     case '_id' : 
        //         this.setState({_id : value})
        //     break;
        //     case 'name' : 
        //         this.setState({name : value})
        //     break;
        //     case 'salary' : 
        //         this.setState({salary : value})
        //     break;
        // }
    }
    render() {
        return (<div className = 'container'>
            <hr />
            <h2>A Simple Form</h2> <hr />
            <form onSubmit = {this.handleSubmit}>
                <div className = 'form-group'>
                   <label>Enter id</label>
                   <input type = "number" name = "_id" 
                   onChange = {this.handleInput}
                   className = "form-control" autoComplete = "off"></input>
                </div>
                <div className = 'form-group'>
                    <label>Enter name</label>
                    <input type = "text" name = "name" 
                    onChange = {this.handleInput}
                    className = "form-control" autoComplete = "off"></input>
                </div>
                <div className = "form-group">
                    <label>Enter salary</label>
                    <input type = "number" name = "salary" 
                    onChange = {this.handleInput}
                    className = "form-control" autoComplete = "off"></input>
                </div>
                <hr />
                <button type = "submit" className = 'btn btn-primary'>Submit</button>
            </form>
            <div>
                Id: {this.state._id} <br />
                Name: {this.state.name} <br />
                Salary: {this.state.salary}
            </div>
        </div>);
    }
}

export default Form;