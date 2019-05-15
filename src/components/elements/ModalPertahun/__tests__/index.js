import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ModalPertahun from '../index';
import Component from '../component';

jest.mock('../../Month');
jest.mock('../../../../configs');

describe('ModalPertahun', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ModalPertahun />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('opens modal when the button clicked', () => {
    const wrapper = shallow(<Component classes={{}} />);
    wrapper.find('#modal-pertahun-open').first().simulate('click');
    expect(wrapper.state('open')).toEqual(true);
  });

  it('closes modal when the button clicked', () => {
    const wrapper = shallow(<Component classes={{}} />);
    wrapper.setState({ open: true });
    wrapper.find('#modal-pertahun-close').first().simulate('click');
    expect(wrapper.state('open')).toEqual(false);
  });
});