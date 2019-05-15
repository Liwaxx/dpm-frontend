import React from 'react';
import renderer from 'react-test-renderer';
import PersonalScore from '../index';

jest.mock('../../Card');
jest.mock('../../Text');
jest.mock('../../../../configs');

describe('PersonalScore', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PersonalScore />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with data', () => {
    const data = { tes: 'tes' };
    const tree = renderer
      .create(<PersonalScore data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});