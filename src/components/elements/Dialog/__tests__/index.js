import React from 'react';
import renderer from 'react-test-renderer';
import Dialog from '../index';

jest.mock('../../Text');
jest.mock('../../../../configs');

describe('Dialog', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Dialog />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});