import React from 'react';
import renderer from 'react-test-renderer';
import ValidatorCard from '../index';

jest.mock('../../../elements/Text');

describe('ValidatorCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ValidatorCard classes={{}} data={{}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});