import * as action from '../action';

describe('Action', () => {
  it('hideSnackbar', () => {
    expect(action.hideSnackbar()).toHaveProperty('type');
  });
});