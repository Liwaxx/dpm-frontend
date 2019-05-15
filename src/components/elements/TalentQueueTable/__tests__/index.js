import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../index';

jest.mock('../../../elements/Text');

describe('TalentScoreCard', () => {
  it('renders correctly', () => {
    const data = [
      { name: 'tes', version: '1' },
    ];
    const tree = renderer
      .create(<Component data={data} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with custom class', () => {
    const tree = renderer
      .create(<Component className="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});