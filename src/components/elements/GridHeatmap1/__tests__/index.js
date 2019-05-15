import React from 'react';
import renderer from 'react-test-renderer';
import GridHeatMap1 from '../index';

jest.mock('../../Text');

describe('GridHeatMap1', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GridHeatMap1 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with data', () => {
    const data = {
      status: [
        { time: '24,00', day: 'monday', status: 'push', },
        { time: '24,00', day: 'monday', status: 'progress', },
        { time: '24,00', day: 'monday', status: 'else', }
      ],
    };
    const tree = renderer
      .create(<GridHeatMap1 data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});