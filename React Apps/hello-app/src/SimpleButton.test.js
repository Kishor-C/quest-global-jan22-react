import React from 'react';
import { SimpleButton } from './SimpleButton';
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
it('button click', () => {
    const onChange = jest.fn();
    act(() => {
        render(<SimpleButton onChange = {onChange}/>, container)
    })
    const button = document.querySelector('[button-id]');
    act(() => {
        button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe('Button');
});