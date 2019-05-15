const CALENDAR_URL = 'https://virtserver.swaggerhub.com/telkomdds/CodexPMPersonalScore/1.0.0/personal/calendar/2001';
const PERSONAL_URL = 'https://virtserver.swaggerhub.com/telkomdds/MockupApi-Codex/1.0.0/personal';
const PRODUCTION_URL = 'http://dpm-backend-codex.apps.playcourt.id';
const MOCKUP_URL = 'https://virtserver.swaggerhub.com/telkomdds/CodexDashboardPerformance_Mockup/1.0.0/api';

const services = {
  GET_WORK_INTENSITY: `${PERSONAL_URL}/workIntensity`,
  ADD_SCHEDULE: `${CALENDAR_URL}/`,
  LIST_SCHEDULE: `${CALENDAR_URL}/`,
  GET_LIST_TIMELINE_SKILL: `${PRODUCTION_URL}/personal/skill`,
  GET_PRODUCT: `${PRODUCTION_URL}/product/get`,
  GET_PRODUCT_BY_ID: `${MOCKUP_URL}/product`,
  GET_PRODUCT_REPORT: `${PRODUCTION_URL}/api/mongo/getcdp`,
  GET_NOTIF: `${PERSONAL_URL}/product/notification`,
  GET_PERSONAL_SCORE : `${PRODUCTION_URL}/api/personal/score`,
  GET_QUEUE_ALL_PROJECT: `${PRODUCTION_URL}/api/product/status/get`,
  GET_SQUAD_PERFORMANCE: `${PRODUCTION_URL}/api/squad-perfomance-chart`,
  GET_SQUAD_BACKLOG : `${PRODUCTION_URL}/personal/squad-backlog`,
  GET_TALENT_PERFORMANCE: `${MOCKUP_URL}/talent-performance/oktober%202018`,
  GET_PERSONAL_BACKLOG : `${PRODUCTION_URL}/personal/personal-backlog`,
  GET_VALIDATOR: `${PRODUCTION_URL}/api/validator/get`,
  SQUADDETAIL: `${PRODUCTION_URL}/personal/squad-backlog/detail`,
  PERSONALDETAIL: `${PRODUCTION_URL}/personal/detail/M001`,
};

export default services;
