import React from 'react';
import renderer from 'react-test-renderer';
import Linechart from '../index';

jest.mock('../../Text');
jest.mock('../styles');

describe('PieChart', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Linechart />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with legend', () => {
    const legend = ['tes'];
    const tree = renderer
      .create(<Linechart legend={legend}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});