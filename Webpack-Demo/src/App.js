import React, {Component} from 'react';
import Hello from './Hello';
class App extends React.Component { 
    render() {
        return(<div>
            <h1>This is a root component</h1>
            <Hello />
        </div>)
    }
}
export default App;