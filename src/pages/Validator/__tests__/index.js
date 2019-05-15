import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Validator from '../index';

jest.mock('../action');
jest.mock('../component');
jest.mock('../styles');

describe('Validator', () => {
  it('has connected redux props', () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      validator: {},
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Validator store={store} />);

    expect(wrapper.props()).toHaveProperty('isLoading');
    expect(wrapper.props()).toHaveProperty('data');
  });
});