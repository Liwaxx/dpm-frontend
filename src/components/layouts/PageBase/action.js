import { ACTIONS } from '../../../constants';

export function hideSnackbar() {
  return {
    type: ACTIONS.CLEAR_SNACKBAR,
  };
}