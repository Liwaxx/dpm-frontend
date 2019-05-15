import React from 'react';
import renderer from 'react-test-renderer';
import PaperGrid from '../index';

jest.mock('../../Text');

describe('PaperGrid', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PaperGrid />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});