import React from 'react';
import renderer from 'react-test-renderer';
import ListSchedule from '../index';

jest.mock('../../Text');

describe('ListSchedule', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ListSchedule />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});