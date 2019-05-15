import * as common from '../common';

const objFn = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: {
    setItem: objFn.setItem,
    getItem: objFn.getItem,
    removeItem: objFn.removeItem,
  },
});

describe('Common', () => {
  it('sets token', () => {
    common.setToken('Test');
    expect(objFn.setItem).toHaveBeenCalled();
  });

  it('gets token', () => {
    common.getToken();
    expect(objFn.getItem).toHaveBeenCalled();
  });

  it('clears storages', () => {
    common.clearStorages();
    expect(objFn.removeItem).toHaveBeenCalledTimes(3);
  });

  it('sets expire time', () => {
    common.setExpireTime(1);
    expect(objFn.setItem).toHaveBeenCalled();
  });

  it('check expire status', () => {
    common.checkExpireTime();
    expect(objFn.getItem).toHaveBeenCalled();
  });
});