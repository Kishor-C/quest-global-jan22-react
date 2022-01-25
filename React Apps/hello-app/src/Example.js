import React, { Component } from 'react';
import {useState} from 'react';
// export class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {message : 'Hello everyone'}
//     }
//     render() {
//         return (<div>
//             {this.state.message}
//         </div>)
//     }
// }

export function Example() {
    const [message, setMessage] = useState('Hello everyone')
    return (<div>
        {message}
    </div>)
}