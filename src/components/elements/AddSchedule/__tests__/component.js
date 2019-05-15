import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../component';

jest.mock('redux-form');
jest.mock('../../../../configs');

describe('Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Component classes={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with message', () => {
    const tree = renderer
      .create(<Component classes={{}} message="tes" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});