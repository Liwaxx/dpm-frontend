import reducer from '../reducer';
import { ACTIONS } from '../../../constants';

describe('Reducer', () => {
  it('returns desired state when given VALIDATOR action', () => {
    const action = {
      type: ACTIONS.VALIDATOR,
      data: { test: 'test' },
    };
    const assert = {
      data: { test: 'test' },
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });

  it('returns desired state when given LOADING_VALIDATOR action', () => {
    const action = {
      type: ACTIONS.LOADING_VALIDATOR,
      isLoading: true,
    };
    const assert = {
      isLoading: true,
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });
  
  it('returns initial state when given other actions', () => {
    const action = { type: 'x' };
    const assert = {
      data: null,
      isLoading: false,
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });
});