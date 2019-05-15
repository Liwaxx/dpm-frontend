import { ACTIONS } from '../../constants';

const initialState = {
  isLoading: false,
  data: null,
};

export default function reducer(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case ACTIONS.LOADING_VALIDATOR:
      return {
        ...state,
        isLoading: true
      };
    case ACTIONS.VALIDATOR:
      return {
        ...state,
        isLoading: false,
        data
      };
    default:
      return state;
  }
}