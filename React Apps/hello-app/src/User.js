import React from 'react';

export function User(props) {
    if(props.name) {
        return <div>Welcome {props.name}</div>
    } else {
        return <div>Hello Guest</div>
    }
}

// <User name = 'Alex' /> should render Welcome Alex
// <User /> show render Hello Guest