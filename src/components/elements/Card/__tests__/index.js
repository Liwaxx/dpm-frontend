import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../index';

describe('Card', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom class', () => {
    const tree = renderer
      .create(<Card className="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});