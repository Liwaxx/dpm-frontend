import React from 'react';
import renderer from 'react-test-renderer';
import GridHeatMap2 from '../index';

jest.mock('../../Text');

describe('GridHeatMap2', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GridHeatMap2 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with data', () => {
    const data = {
      status: [
        { time: '24,00', status: 'push', },
        { time: '24,00', status: 'progress', },
        { time: '24,00', status: 'else', }
      ],
      month: 'january',
    };
    const tree = renderer
      .create(<GridHeatMap2 data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});