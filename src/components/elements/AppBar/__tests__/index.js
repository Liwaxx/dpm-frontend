import React from 'react';
import renderer from 'react-test-renderer';
import AppBar from '../index';

jest.mock('../../Date');
jest.mock('../../Select');
jest.mock('../../../../configs');

describe('AppBar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AppBar />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});