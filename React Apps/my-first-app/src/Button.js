import React, {Component} from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {likeCounter : 0, dislikeCounter : 0}
    }
    likes = () => {
        this.setState((prevState) => ({likeCounter : prevState.likeCounter + 1}))
    }
    dislikes = () => {
        this.setState((prevState) => ({dislikeCounter : prevState.dislikeCounter + 1}));
    }
    render() {
        return (<div className = 'container-fluid'>
            <h2>A Like and Dislike buttons!</h2> <hr />
            <button className = 'btn btn-primary' onClick = {this.likes}>Like(s): {this.state.likeCounter}</button>
            &nbsp;
            <button className = 'btn btn-primary' onClick = {this.dislikes}>Dislike(s): {this.state.dislikeCounter}</button>
            
        </div>)
    }
}
export default Button;