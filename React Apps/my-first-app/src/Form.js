import React, {Component} from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props);
        // initializing the state
        this.state = {name : "Alexandar", age : 35};
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
        // updating the state
        this.setState({name : "Bruce", age : 44});
    }
   
    render() {
        return (<div>
            <h2>A Simple Form</h2> <hr />
            <p>Name: {this.state.name}, Age: {this.state.age}</p>
            <form onSubmit = {this.handleSubmit}>
                <button type = "submit">Submit</button>
            </form>
            
        </div>);
    }
}

export default Form;