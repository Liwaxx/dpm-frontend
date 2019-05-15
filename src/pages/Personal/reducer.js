import { ACTIONS } from '../../constants';

const initialState = {
  isLoading: false,
  dataWorkIntensity: {},
  addSchedule: {},
  listSchedule: {},
  dataProduct: {},
  notifications: {},
  dataScore: {},
  dataSB: {},
  dataPB: {},
  dataDetailS: {},
  dataDetailP: {},
  dataProductReport: {},
  dataTimelineSkill: {},
};

export default function reducer(state = initialState, action) {
  const { 
    type,
    dataProduct, 
    dataWorkIntensity, 
    notifications, 
    dataScore, 
    dataSB, 
    dataPB,
    dataDetailS, 
    dataDetailP,
    addSchedule, 
    listSchedule,
    dataProductReport,
    dataTimelineSkill,
  } = action;

  switch (type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ACTIONS.LIST_OF_WORK_INTENSITY_FETCHED:
      return {
        ...state,
        isLoading: false,
        dataWorkIntensity,
      };
    case ACTIONS.ADD_SCHEDULE_FETCHED:
      return {
        ...state,
        isLoading: false,
        addSchedule,
      };
    case ACTIONS.LIST_SCHEDULE_FETCHED:
      return {
        ...state,
        isLoading: false,
        listSchedule,
      };
    case ACTIONS.LIST_PRODUCT_FECHED:
      return {
        ...state,
        isLoading: false,
        dataProduct
      };
    case ACTIONS.LIST_OF_SQUAD_BACKLOG:
      return {
        ...state,
        isLoading: false,
        dataSB
      };
    case ACTIONS.LIST_OF_PERSONAL_BACKLOG:
      return {
        ...state,
        isLoading: false,
        dataPB
      };
    case ACTIONS.LIST_OF_PERSONAL_SCORE_FETCHED:
      return {
        ...state,
        isLoading: false,
        dataScore
      };
    case ACTIONS.LIST_NOTIF_FECHED:
      return {
        ...state,
        isLoading: false,
        notifications
      };
    case ACTIONS.SQUADDETAIL:
      return {
        ...state,
        isLoading: false,
        dataDetailS
      };
    case ACTIONS.PERSONALDETAIL:
      return {
        ...state,
        isLoading: false,
        dataDetailP
      };
    case ACTIONS.LIST_PRODUCT_REPORT_FETCHED:
      return {
        ...state,
        isLoading: false,
        dataProductReport,
      };
    case ACTIONS.LIST_TIMELINE_SKILL_FETCHED:
      return {
        ...state,
        isLoading: false,
        dataTimelineSkill,
      };
    default:
      return state;
  }
}