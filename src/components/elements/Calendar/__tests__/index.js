import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../index';

describe('Icon', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Icon name="tes" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders active state', () => {
    const tree = renderer
      .create(<Icon isActive name="tes" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});