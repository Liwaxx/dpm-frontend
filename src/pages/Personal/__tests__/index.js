import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Personal from '../index';

jest.mock('../action');
jest.mock('../component');
jest.mock('../styles');

describe('Personal', () => {
  it('has connected redux props', () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {};
    const assert = {
      actions: {},
      isLoading: false,
      dataWorkIntensity: {},
      addSchedule: {},
      listSchedule: {},
      dataProduct: {},
      notifications: {},
      dataScore: {},
      dataSB: {},
      dataPB: {},
      dataDetailS: {},
      dataDetailP: {},
    };
    initialState.personal = {
      isLoading: false,
      dataWorkIntensity: {},
      addSchedule: {},
      listSchedule: {},
      dataProduct: {},
      notifications: {},
      dataScore: {},
      dataSB: {},
      dataPB: {},
      dataDetailS: {},
      dataDetailP: {},
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Personal store={store} />);
    expect(wrapper.props()).toMatchObject(assert);
  });
});