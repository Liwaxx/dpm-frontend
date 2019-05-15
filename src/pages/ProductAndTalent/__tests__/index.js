import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ProductAndTalent from '../index';

jest.mock('../action');
jest.mock('../component');
jest.mock('../styles');

describe('ProductAndTalent', () => {
  it('has connected redux props', () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {};
    const assert = {
      actions: {},
      isLoadingProduct: false,
      dataProduct: []
    };
    initialState.talent = {
      isLoadingProduct: false,
      dataProduct: []
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<ProductAndTalent store={store} />);
    expect(wrapper.props()).toMatchObject(assert);
  });
});