import { ACTIONS } from '../../constants';

const initialState = {
  isLoadingProduct: false,
  isLoading: false,
  dataProduct: [],
  dataAllProject: [],
  dataSquadPerformance: [],
};

export default function reducer(state = initialState, action) {
  const { type, dataProduct, dataAllProject, dataSquadPerformance } = action;
  switch (type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ACTIONS.LOADING_PRODUCT:
      return {
        ...state,
        isLoadingProduct: true
      };
    case ACTIONS.LIST_PRODUCT_FETCHED:
      return {
        ...state,
        isLoadingProduct: false,
        dataProduct,
      };
    case ACTIONS.LIST_ALL_PROJECT:
      return {
        ...state,
        isLoading: false,
        dataAllProject,
      };
    case ACTIONS.LIST_OF_SQUAD_PERFORMANCE:
      return {
        ...state,
        isLoading: false,
        dataSquadPerformance,
      };
    default:
      return state;
  }
}