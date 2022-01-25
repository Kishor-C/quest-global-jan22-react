import React from 'react';
import {Example} from './Example';
import renderer from 'react-test-renderer';

it('Example renders message correctly', () => {
    const exampleInstance = renderer.create(<Example />).toJSON();
    // example content must match to the snapshot
    expect(exampleInstance).toMatchSnapshot();
});