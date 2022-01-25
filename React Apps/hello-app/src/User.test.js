import React from 'react';
import {User} from './User';
import {act} from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
//beforeEach is called before the test case
// afterEach is called after the test case
let container = null; // initialize this container to be present inside body of document
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
it('render User or Guest', () => {
    // prepare the component before expecting
    act(() => {
        render(<User />, container); // render the User in the div
    });
    expect(container.textContent).toBe('Hello Guest');
    // prepare the component before expecting
    act(() => {
        render(<User name = 'Alex' />, container);
    });
    expect(container.textContent).toBe('Welcome Alex');
});