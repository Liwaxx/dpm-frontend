import React from 'react';
import renderer from 'react-test-renderer';
import MiniBox from '../index';

jest.mock('../../Grid');
jest.mock('../../Text');

describe('MiniBox', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MiniBox />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});