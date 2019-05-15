import * as actions from '../action';
import fetch from '../../../utils/fetch';

jest.mock('../../../configs');
jest.mock('../../../utils/fetch');

let dispatch;

describe('Actions', () => {
  beforeEach(() => {
    dispatch = jest.fn();
    const mockFn = (param) => new Promise((resolve, reject) => {
      if (param.method == 'get') resolve({ data: [], });
      if (param.data && param.data.status == 'test' || param.meta == 'test') resolve({ data: 'success', meta: 'test' });
      else reject({ data: { message: 'fail' } });
      
    });
    fetch.mockImplementation(mockFn);
  });

  it('calls dispatch when fetchProduct success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchProduct()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchProduct error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchProduct()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchQueueAllProject success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchQueueAllProject()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchQueueAllProject error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchQueueAllProject()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchDataSquadPerformance success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchDataSquadPerformance()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchDataSquadPerformance error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchDataSquadPerformance()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
});