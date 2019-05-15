import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Modal from '../index';
import Component from '../component';

jest.mock('../../../../configs');

describe('Modal', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Modal />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('increases state.count when the button clicked', () => {
    const wrapper = shallow(<Component classes={{}} />);
    wrapper.setState({ open: true });
    wrapper.find('#modal-increment').first().simulate('click');
    expect(wrapper.state('count')).toEqual(1);
  });

  it('returns state.count to 0 when the button clicked and count is 11', () => {
    const wrapper = shallow(<Component classes={{}} />);
    wrapper.setState({ open: true, count: 11 });
    wrapper.find('#modal-increment').first().simulate('click');
    expect(wrapper.state('count')).toEqual(0);
  });

  it('decreases state.count when the button clicked', () => {
    const wrapper = shallow(<Component classes={{}} />);
    wrapper.setState({ open: true, count: 2 });
    wrapper.find('#modal-decrement').first().simulate('click');
    expect(wrapper.state('count')).toEqual(1);
  });

  it('returns state.count to 11 when the button clicked and count is 0', () => {
    const wrapper = shallow(<Component classes={{}} />);
    wrapper.setState({ open: true, count: 0 });
    wrapper.find('#modal-decrement').first().simulate('click');
    expect(wrapper.state('count')).toEqual(11);
  });

  it('opens modal when the button clicked', () => {
    const wrapper = shallow(<Component classes={{}} />);
    wrapper.find('#modal-open').first().simulate('click');
    expect(wrapper.state('open')).toEqual(true);
  });

  it('closes modal when the button clicked', () => {
    const wrapper = shallow(<Component classes={{}} />);
    wrapper.setState({ open: true });
    wrapper.find('#modal-close').first().simulate('click');
    expect(wrapper.state('open')).toEqual(false);
  });
});