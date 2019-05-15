import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../index';

jest.mock('../../../elements/Text');

describe('TalentVacancyCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Component data={{}} />)
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