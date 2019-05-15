import reducer from '../reducer';
import { ACTIONS } from '../../../constants';

describe('Personal reducer', () => {
  it('returns desired state when given LOADING action', () => {
    const action = { type: ACTIONS.LOADING };
    expect(reducer(undefined, action)).toHaveProperty('isLoading', true);
  });

  it('returns desired state when given LIST_OF_WORK_INTENSITY_FETCHED action', () => {
    const action = {
      type: ACTIONS.LIST_OF_WORK_INTENSITY_FETCHED,
      dataWorkIntensity: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataWorkIntensity.tes).toBe('tes');
  });

  it('returns desired state when given ADD_SCHEDULE_FETCHED action', () => {
    const action = {
      type: ACTIONS.ADD_SCHEDULE_FETCHED,
      addSchedule: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.addSchedule.tes).toBe('tes');
  });

  it('returns desired state when given LIST_SCHEDULE_FETCHED action', () => {
    const action = {
      type: ACTIONS.LIST_SCHEDULE_FETCHED,
      listSchedule: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.listSchedule.tes).toBe('tes');
  });

  it('returns desired state when given LIST_PRODUCT_FECHED action', () => {
    const action = {
      type: ACTIONS.LIST_PRODUCT_FECHED,
      dataProduct: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataProduct.tes).toBe('tes');
  });
  
  it('returns desired state when given LIST_OF_SQUAD_BACKLOG action', () => {
    const action = {
      type: ACTIONS.LIST_OF_SQUAD_BACKLOG,
      dataSB: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataSB.tes).toBe('tes');
  });

  it('returns desired state when given LIST_OF_PERSONAL_BACKLOG action', () => {
    const action = {
      type: ACTIONS.LIST_OF_PERSONAL_BACKLOG,
      dataPB: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataPB.tes).toBe('tes');
  });

  it('returns desired state when given LIST_OF_PERSONAL_SCORE_FETCHED action', () => {
    const action = {
      type: ACTIONS.LIST_OF_PERSONAL_SCORE_FETCHED,
      dataScore: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataScore.tes).toBe('tes');
  });

  it('returns desired state when given LIST_NOTIF_FECHED action', () => {
    const action = {
      type: ACTIONS.LIST_NOTIF_FECHED,
      notifications: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.notifications.tes).toBe('tes');
  });

  it('returns desired state when given SQUADDETAIL action', () => {
    const action = {
      type: ACTIONS.SQUADDETAIL,
      dataDetailS: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataDetailS.tes).toBe('tes');
  });

  it('returns desired state when given PERSONALDETAIL action', () => {
    const action = {
      type: ACTIONS.PERSONALDETAIL,
      dataDetailP: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataDetailP.tes).toBe('tes');
  });

  it('returns desired state when given LIST_PRODUCT_REPORT_FETCHED action', () => {
    const action = {
      type: ACTIONS.LIST_PRODUCT_REPORT_FETCHED,
      dataProductReport: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataProductReport.tes).toBe('tes');
  });

  it('returns desired state when given LIST_TIMELINE_SKILL_FETCHED action', () => {
    const action = {
      type: ACTIONS.LIST_TIMELINE_SKILL_FETCHED,
      dataTimelineSkill: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataTimelineSkill.tes).toBe('tes');
  });

  it('returns initial state when given other actions', () => {
    const action = { type: 'x' };
    const assert = {
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
    expect(reducer(undefined, action)).toMatchObject(assert);
  });
});