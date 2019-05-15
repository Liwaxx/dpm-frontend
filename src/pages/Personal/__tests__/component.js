import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../component';

jest.mock('../../../components/elements/AddSchedule');
jest.mock('../../../components/elements/Calendar');
jest.mock('../../../components/elements/Card');
jest.mock('../../../components/elements/Detail');
jest.mock('../../../components/elements/Dropdown');
jest.mock('../../../components/elements/GridHeatmap1');
jest.mock('../../../components/elements/GridHeatmap2');
jest.mock('../../../components/elements/ListSchedule');
jest.mock('../../../components/elements/Modal');
jest.mock('../../../components/elements/ModalPertahun');
jest.mock('../../../components/elements/ProductCard');
jest.mock('../../../components/elements/PersonalScore');
jest.mock('../../../components/elements/PieChart');
jest.mock('../../../components/elements/Text');
jest.mock('../../../utils/dateFormat');

describe('Personal', () => {
  let props = {};
  beforeEach(() => {
    props = {
      actions: {
        fetchDataProduct: jest.fn(),
        fetchDataNotif: jest.fn(),
        fetchPersonalScore: jest.fn(),
        fetchSquadBacklog: jest.fn(),
        fetchPersonalBacklog: jest.fn(),
        fetchWorkIntensity: jest.fn(),
        fetchListSchedule: jest.fn(),
        getDetailP: jest.fn(),
        getDetailS: jest.fn(),
        fetchDataTimelinSkill: jest.fn(),
        fetchDataProductReport: jest.fn(),
      },
      classes: {},
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
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Component {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});