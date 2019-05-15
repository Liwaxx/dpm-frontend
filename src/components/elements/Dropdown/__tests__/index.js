import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '../index';

describe('Dropdown', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Dropdown />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});