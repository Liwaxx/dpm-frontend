import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import AppBar from '../component';

jest.mock('../../Date');
jest.mock('../../Select');
jest.mock('../../../../configs');

describe('AppBar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AppBar classes={{}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('responds to value change', () => {
    const value = 'search';
    const wrapper = mount(<AppBar classes={{}}/>);
    const input = wrapper.find('input');
    
    input.simulate('change', { target: { value: value } });
    expect(wrapper.state().value).toEqual(value);
  });

});