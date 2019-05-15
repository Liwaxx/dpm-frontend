import icons from './icons';
import images from './images';
import routes from './routes';
import services from './services';

export const ICONS = icons;
export const IMAGES = images;
export const ROUTES = routes;
export const SERVICES = services;
export const EXPIRE_TIME_STORAGE = 'dpm_expired_time';
export const TOKEN_STORAGE = 'dpm_access_token';
export const USER_DATA_STORAGE = 'dpm_user_data';

export const HEADERS = {
  HEADERS() {
    const params = {
      'Authorization': 'Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ=='
    }
    return params;
  }
}