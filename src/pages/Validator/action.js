import { ACTIONS } from '../../constants';
import { SERVICES, HEADERS } from '../../configs';
import fetch from '../../utils/fetch';

export function fetchValidator() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: SERVICES.GET_VALIDATOR,
      headers: HEADERS.HEADERS()
    };
    dispatch(loadingAction());

    fetch(options)
      .then(response => {
        dispatch(dataFetched(response.data));
      })
      .catch(() => {
        dispatch(dataFetched(null));
      });
  };
}

function loadingAction() {
  return { type: ACTIONS.LOADING_VALIDATOR };
}

function dataFetched(data) {
  return {
    type: ACTIONS.VALIDATOR,
    data: data
  };
}