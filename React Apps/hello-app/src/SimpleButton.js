import React, {useState} from 'react';

export function SimpleButton(props) {
    const [state, setState] = useState(false);
    return (<div>
        <button onClick = {() => {setState(prevState => !prevState);
        props.onChange(!state)}} button-id = 'btn'>Button</button>
    </div>)
}