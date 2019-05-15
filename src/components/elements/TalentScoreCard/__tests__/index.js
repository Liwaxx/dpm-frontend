import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../index';

jest.mock('../../../elements/Text');

describe('TalentScoreCard', () => {
  it('renders correctly', () => {
    const data = {
      name: 'UI',
      rank: [{ name: 'Achie', previous: 2, point: 5 }, { name: 'Muhammad', previous: 5, point: 4.8 }, { name: 'Charlie', previous: 1, point: 4.6 }]
    };
    const tree = renderer
      .create(<Component data={data} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with custom class', () => {
    const tree = renderer
      .create(<Component data={{}} className="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});