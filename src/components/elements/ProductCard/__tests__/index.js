import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../index';

jest.mock('../../Card');
jest.mock('../../Text');

describe('ProductCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ProductCard />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with data stakeholder', () => {
    const data = { stakeholder: [{ unit: 'tes' }], };
    const tree = renderer
      .create(<ProductCard data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with data member', () => {
    const data = {
      member: [{ talentName: 'tes', talentRole: 'tes' }],
    };
    const tree = renderer
      .create(<ProductCard data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with notif', () => {
    const data = { stakeholder: [{ unit: 'tes' }], };
    const notif = {
      description: 'tes',
      member: [{ talentName: 'tes', talentRole: 'tes' }],
    };
    const tree = renderer
      .create(<ProductCard data={data} notif={notif} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without notif.member', () => {
    const data = { stakeholder: [{ unit: 'tes' }], };
    const notif = { description: 'tes' };
    const tree = renderer
      .create(<ProductCard data={data} notif={notif} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});