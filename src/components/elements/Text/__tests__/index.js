import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../index';

describe('Text', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Text />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom class', () => {
    const tree = renderer
      .create(<Text className="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});