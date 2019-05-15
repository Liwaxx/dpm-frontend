import { ACTIONS } from '../constants';

const initialState = {
  message: ''
};

export default function reducer(state = initialState, action) {
  const { CLEAR_SNACKBAR, SHOW_SNACKBAR } = ACTIONS;
  const { type, message } = action;

  switch (type) {
    case CLEAR_SNACKBAR:
      return {
        ...state,
        message: ''
      };
    case SHOW_SNACKBAR:
      return {
        ...state,
        message,
      };
    default:
      return state;
  }
}
