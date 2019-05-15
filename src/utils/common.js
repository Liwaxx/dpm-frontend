import { TOKEN_STORAGE, EXPIRE_TIME_STORAGE, USER_DATA_STORAGE } from '../configs';

export function setToken(value) {
  localStorage.setItem(TOKEN_STORAGE, value);
}

export function getToken() {
  return localStorage.getItem(TOKEN_STORAGE);
}

export function clearStorages() {
  localStorage.removeItem(TOKEN_STORAGE);
  localStorage.removeItem(EXPIRE_TIME_STORAGE);
  localStorage.removeItem(USER_DATA_STORAGE);
}

export function setExpireTime(value) {
  const time = new Date().getTime();

  localStorage.setItem(EXPIRE_TIME_STORAGE, time + (value * 1000));
}

export function checkExpireTime() {
  const time = new Date().getTime();
  const expire = localStorage.getItem(EXPIRE_TIME_STORAGE) || 0;
  
  return time > expire;
}