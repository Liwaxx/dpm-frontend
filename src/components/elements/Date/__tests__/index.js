import React from 'react';
import renderer from 'react-test-renderer';
import Date from '../index';

jest.mock('../../Text');

describe('Date', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Date date="2018-11-11" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});