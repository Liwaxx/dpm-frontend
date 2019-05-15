import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DrawerList from '../index';
import Component from '../component';

jest.mock('react-router-dom');

describe('DrawerList', () => {
  it('renders item', () => {
    const item = { name: 'test', icon: '', url: '' };
    const tree = renderer
      .create(<DrawerList item={item} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders mini drawer', () => {
    const item = { name: 'test', icon: '', url: '' };
    const tree = renderer
      .create(<DrawerList isMiniDrawer item={item} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders item with badge', () => {
    const item = { name: 'test', icon: '', url: '', badge: { content: '' } };
    const tree = renderer
      .create(<DrawerList item={item} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders item with badge color', () => {
    const item = { name: 'test', icon: '', url: '', badge: { color: 'test', content: 'test' } };
    const tree = renderer
      .create(<DrawerList item={item} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders title item', () => {
    const item = { title: 'test' };
    const tree = renderer
      .create(<DrawerList item={item} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders divider item', () => {
    const item = { divider: true };
    const tree = renderer
      .create(<DrawerList item={item} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders child item', () => {
    const item = {
      children: [
        { name: 'test', icon: '', url: '' },
      ]
    };
    const tree = renderer
      .create(<DrawerList item={item} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('change state when child is expanded', () => {
    const item = {
      children: [
        { name: 'test', icon: '', url: '' },
      ]
    };
    const wrapper = shallow(<Component item={item} />);
    wrapper.find('.drawer-list__expand').first().simulate('click');
    expect(wrapper.state('open')).toEqual(true);
  });
});