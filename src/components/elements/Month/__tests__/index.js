import React from 'react';
import renderer from 'react-test-renderer';
import Month from '../index';

jest.mock('../../../../configs');

describe('Month', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Month />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});