import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PageBase from '../index';

jest.mock('../action');
jest.mock('../component');
jest.mock('../styles');

describe('PageBase', () => {
  it('has connected redux props', () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      snackbar: {}
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<PageBase store={store} />);

    expect(wrapper.props()).toHaveProperty('message');
    expect(wrapper.props()).toHaveProperty('actions');
  });
});