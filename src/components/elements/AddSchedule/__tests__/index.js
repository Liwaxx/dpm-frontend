import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AddSchedule from '../index';

jest.mock('../component');
jest.mock('../styles');
jest.mock('../validate');

describe('AddSchedule', () => {
  it('has connected redux props', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});
    const wrapper = shallow(<AddSchedule store={store} />);
    expect(wrapper.props().form).toBe('AddSchedule');
  });
});