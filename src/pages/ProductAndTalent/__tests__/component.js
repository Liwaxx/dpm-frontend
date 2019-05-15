import React from 'react';
import renderer from 'react-test-renderer';
import ProductAndTalent from '../component';

jest.mock('../../../components/elements/Card');
jest.mock('../../../components/elements/TalentQueueTable');
jest.mock('../../../components/elements/TalentScoreCard');
jest.mock('../../../components/elements/TalentVacancyCard');
jest.mock('../../../components/elements/Text');

describe('ProductAndTalent', () => {
  let props = {};
  beforeEach(() => {
    props = {
      actions: { 
        fetchProduct: jest.fn(),
        fetchQueueAllProject: jest.fn(),
        fetchDataSquadPerformance: jest.fn(),
      },
      classes: {},
      isLoadingProduct: false,
    };
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<ProductAndTalent {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders loading state', () => {
    props.isLoadingProduct = true;
    const tree = renderer
      .create(<ProductAndTalent {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});