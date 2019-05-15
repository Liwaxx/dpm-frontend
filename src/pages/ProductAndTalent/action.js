import { ACTIONS } from '../../constants';
import { SERVICES, HEADERS } from '../../configs';
import fetch from '../../utils/fetch';

export function fetchProduct() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_PRODUCT}`,
      headers: HEADERS.HEADERS(),
    };

    dispatch(loadingProductAction());

    fetch(options)
      .then(response => {
        dispatch(dataProductFetched(response.data));
      })
      .catch(() => {
        dispatch(dataProductFetched([]));
      });
  };
}

export function fetchQueueAllProject(payload) {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_QUEUE_ALL_PROJECT}/${payload}`,
      headers: HEADERS.HEADERS(),
    };

    dispatch(loadingAction());
    
    fetch(options)
      .then(response => {
        dispatch(dataAllProjectFetched(response.data));
      })
      .catch(() => {
        dispatch(dataAllProjectFetched([]));
      });
  };
}

export function fetchDataSquadPerformance(payload = {}) {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_SQUAD_PERFORMANCE}/${payload.user}/${payload.year}`,
      headers: HEADERS.HEADERS(),
    };

    dispatch(loadingAction());
    
    fetch(options)
      .then(response => {
        dispatch(dataSquadPerformanceFetched(response.data));
      })
      .catch(() => {
        dispatch(dataSquadPerformanceFetched([]));
      });
  };
}

export function fetchDataTalentPerformance() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_TALENT_PERFORMANCE}`,
      headers: HEADERS.HEADERS(),
    };

    dispatch(loadingProductAction());

    fetch(options)
      .then(response => {
        dispatch(dataTalentPerformanceFetched(response.data));
      })
      .catch(() => {
        dispatch(dataTalentPerformanceFetched([]));
      });
  };
}

function loadingAction() {
  return { type: ACTIONS.LOADING };
}

function loadingProductAction() {
  return { type: ACTIONS.LOADING_PRODUCT };
}

function dataProductFetched(dataProduct) {
  return {
    type: ACTIONS.LIST_PRODUCT_FETCHED,
    dataProduct,
  };
}

function dataAllProjectFetched(data) {
  return {
    type: ACTIONS.LIST_ALL_PROJECT,
    dataAllProject: data,
  };
}

function dataSquadPerformanceFetched(data) {
  return {
    type: ACTIONS.LIST_OF_SQUAD_PERFORMANCE,
    dataSquadPerformance: data,
  };
}

function dataTalentPerformanceFetched(data) {
  return {
    type: ACTIONS.LIST_OF_TALENT_PERFORMANCE,
    dataTalentPerformance: data,
  };
}