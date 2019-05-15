import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '../index';

jest.mock('../../Dialog');
jest.mock('../../MiniBox');
jest.mock('../../PaperGrid');
jest.mock('../../Text');

describe('Detail', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Detail detail={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with data', () => {
    const detail = {
      totalBacklog: [{
        status: 'tes',
        total: 1,
        description: [{ description: 'tes', }],
      }]
    };
    const tree = renderer
      .create(<Detail detail={detail} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});