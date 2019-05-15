import { ACTIONS } from '../../constants';
import fetch from '../../utils/fetch';
import { SERVICES, HEADERS } from '../../configs';

export function fetchWorkIntensity() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_WORK_INTENSITY}`,
    };
    dispatch(loadingAction());

    fetch(options)
      .then(response => {
        dispatch(dataFetchedWorkIntensity(response));
      })
      .catch(() => {
        dispatch(dataFetchedWorkIntensity({}));
      });
  };
}

export function fetchDataProduct() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_PRODUCT_BY_ID}`,
      headers: HEADERS.HEADERS(),
    };
    dispatch(loadingAction());

    fetch(options)
      .then(response => {
        // console.log(response);
        dispatch(dataFetchedProduct(response.data));
      })
      .catch(() => {
        dispatch(dataFetchedProduct({}));

      });
  };
}

export function fetchPersonalScore(payload) {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_PERSONAL_SCORE}/${payload}`,
      headers: HEADERS.HEADERS(),
    };

    dispatch(loadingAction());

    fetch(options)
      .then(response => {
        dispatch(dataFetchedScore(response.data));
      })
      .catch(() => {
        dispatch(dataFetchedScore({}));
      });
  };
}

export function fetchSquadBacklog() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_SQUAD_BACKLOG}`,
      headers: HEADERS.HEADERS(),
    };

    dispatch(loadingAction());
    fetch(options)
      .then(response => {
        dispatch(dataFetchedSB(response.data));
      })
      .catch(() => {
        dispatch(dataFetchedSB({}));
      });
  };
}

export function fetchPersonalBacklog() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_PERSONAL_BACKLOG}/M001`,
      headers: HEADERS.HEADERS(),
    };

    dispatch(loadingAction());

    fetch(options)
      .then(response => {
        dispatch(dataFetchedPB(response.data));
      })
      .catch(() => {
        dispatch(dataFetchedPB({}));
      });
  };
}

export function fetchDataNotif() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: SERVICES.GET_NOTIF
    };
    dispatch(loadingAction());

    fetch(options)
      .then(response => {
        dispatch(dataFetchedNotif(response.data));
      })
      .catch(() => {
        dispatch(dataFetchedNotif({}));
      });
  };
}

export function getDetailP() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.PERSONALDETAIL}`,
      headers: HEADERS.HEADERS(),
    };
    dispatch(loadingAction());

    fetch(options)
      .then(response => {
        dispatch(dataDetailPFetched(response.data));
      })
      .catch(() => {
        dispatch(dataDetailPFetched({}));
      });
  };
}

export function getDetailS() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.SQUADDETAIL}`,
      headers: HEADERS.HEADERS(),
    };
    dispatch(loadingAction());

    fetch(options)
      .then(response => {
        dispatch(dataDetailSFetched(response.data));
      })
      .catch(() => {
        dispatch(dataDetailSFetched({}));
      });
  };
}

export function fetchListSchedule() {
  return dispatch => {
    const options = {
      method: 'get',
      url: `${SERVICES.LIST_SCHEDULE}`,
      header: {
        'Content-Type': 'application/json',
        
      }
    };

    dispatch(loadingAction());
    fetch(options)
      .then(Response => {
        // console.log(Response);
        dispatch(listScheduleFetched(Response)); 
      })
      .catch(() => {
        dispatch(listScheduleFetched({}));
      });
  };
}

export function fetchSubmit(payload) {
  return dispatch => {
    const options = {
      method: 'POST',
      url: `${SERVICES.ADD_SCHEDULE}`, //${date}
      params: payload,
      header: {
        'Content-Type': 'application/json'
      }
    };

    dispatch(loadingAction());
    fetch(options)
      .then(Response => {
        // console.log(Response);
        location.href = '/';
        dispatch(addScheduleFetched(Response));
      })
      .catch(() => {
        dispatch(addScheduleFetched({}));
      });
  };
}

export function fetchDataProductReport(payload) {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_PRODUCT_REPORT}/${payload}`,
      headers: HEADERS.HEADERS(),
    };

    dispatch(loadingAction());
    
    fetch(options)
      .then(response => {
        dispatch(dataProductReportFetched(response.data));
      })
      .catch(() => {
        dispatch(dataProductReportFetched({}));
      });
  };
}

export function fetchDataTimelinSkill(payload) {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_LIST_TIMELINE_SKILL}/${payload.user}/${payload.date}`,
      headers: HEADERS.HEADERS(),
    };

    dispatch(loadingAction());
    
    fetch(options)
      .then(response => {
        dispatch(dataTimelineSkillFetched(response.data));
      })
      .catch(() => {
        dispatch(dataTimelineSkillFetched({}));
      });
  };
}

function loadingAction() {
  return { type: ACTIONS.LOADING };
}

function dataFetchedWorkIntensity(dataWorkIntensity) {
  return {
    type: ACTIONS.LIST_OF_WORK_INTENSITY_FETCHED,
    dataWorkIntensity: dataWorkIntensity
  };
}
function dataFetchedProduct(dataProduct) {
  return {
    type: ACTIONS.LIST_PRODUCT_FECHED,
    dataProduct: dataProduct
  };
}

function dataFetchedSB(dataSB) {
  return {
    type: ACTIONS.LIST_OF_SQUAD_BACKLOG,
    dataSB: dataSB
  };
}

function dataFetchedPB(dataPB) {
  return {
    type: ACTIONS.LIST_OF_PERSONAL_BACKLOG,
    dataPB: dataPB
  };
}

function dataFetchedNotif(notifications) {
  return {
    type: ACTIONS.LIST_NOTIF_FECHED,
    notifications: notifications
  };
}

function dataFetchedScore(dataScore) {
  return {
    type: ACTIONS.LIST_OF_PERSONAL_SCORE_FETCHED,
    dataScore: dataScore
  };
}

function addScheduleFetched(addSchedule) {
  return {
    type: ACTIONS.ADD_SCHEDULE_FETCHED,
    addSchedule: addSchedule,
  };
}

function listScheduleFetched(listSchedule) {
  return {
    type: ACTIONS.LIST_SCHEDULE_FETCHED,
    listSchedule: listSchedule,
  };
}

function dataDetailPFetched(dataDetailP) {
  return {
    type: ACTIONS.PERSONALDETAIL,
    dataDetailP: dataDetailP,
  };
}

function dataDetailSFetched(dataDetailS) {
  return {
    type: ACTIONS.SQUADDETAIL,
    dataDetailS: dataDetailS,
  };
}

function dataProductReportFetched(data) {
  return {
    type: ACTIONS.LIST_PRODUCT_REPORT_FETCHED,
    dataProductReport: data,
  };
}

function dataTimelineSkillFetched(data) {
  return {
    type: ACTIONS.LIST_TIMELINE_SKILL_FETCHED,
    dataTimelineSkill: data,
  };
}
