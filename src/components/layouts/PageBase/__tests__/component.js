import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../component';

jest.mock('@material-ui/core/Snackbar');
jest.mock('../../../elements/Text');
jest.mock('../../../elements/DrawerList');
jest.mock('../../../../constants/drawerListData');
jest.mock('.././../../../utils/common');

describe('Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Component actions={{}} classes={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with snackbar', () => {
    const tree = renderer
      .create(<Component actions={{}} classes={{}} message="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});