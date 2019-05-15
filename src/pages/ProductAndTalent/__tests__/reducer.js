import reducer from '../reducer';
import { ACTIONS } from '../../../constants';

describe('ProductAndTalent reducer', () => {
  it('returns desired state when given LOADING action', () => {
    const action = { type: ACTIONS.LOADING };
    expect(reducer(undefined, action)).toHaveProperty('isLoading', true);
  });

  it('returns desired state when given LOADING_PRODUCT action', () => {
    const action = { type: ACTIONS.LOADING_PRODUCT };
    expect(reducer(undefined, action)).toHaveProperty('isLoadingProduct', true);
  });

  it('returns desired state when given LIST_PRODUCT_FETCHED action', () => {
    const action = {
      type: ACTIONS.LIST_PRODUCT_FETCHED,
      dataProduct: [1, 2, 3]
    };
    const assert = {
      isLoadingProduct: false,
      dataProduct: [1, 2, 3]
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });

  it('returns initial state when given other actions', () => {
    const action = { type: 'x' };
    const assert = {
      isLoadingProduct: false,
      dataProduct: []
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });

  it('returns desired state when given LIST_ALL_PROJECT action', () => {
    const action = {
      type: ACTIONS.LIST_ALL_PROJECT,
      dataAllProject: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataAllProject.tes).toBe('tes');
  });

  it('returns desired state when given LIST_OF_SQUAD_PERFORMANCE action', () => {
    const action = {
      type: ACTIONS.LIST_OF_SQUAD_PERFORMANCE,
      dataSquadPerformance: { tes: 'tes' },
    };
    const test = reducer(undefined, action);
    expect(test.isLoading).toBe(false);
    expect(test.dataSquadPerformance.tes).toBe('tes');
  });
});