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

  it('calls dispatch when fetchWorkIntensity success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchWorkIntensity()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchWorkIntensity error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchWorkIntensity()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchDataProduct success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchDataProduct()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchDataProduct error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchDataProduct()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchPersonalScore success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchPersonalScore()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchPersonalScore error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchPersonalScore()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchSquadBacklog success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchSquadBacklog()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchSquadBacklog error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchSquadBacklog()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchPersonalBacklog success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchPersonalBacklog()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchPersonalBacklog error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchPersonalBacklog()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchDataNotif success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchDataNotif()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchDataNotif error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchDataNotif()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when getDetailP success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.getDetailP()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when getDetailP error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.getDetailP()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when getDetailS success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.getDetailS()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when getDetailS error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.getDetailS()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchListSchedule success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchListSchedule()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchListSchedule error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchListSchedule()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchSubmit success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchSubmit()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchSubmit error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchSubmit()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchDataProductReport success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ dataProductReport: [], meta:'test' });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchDataProductReport()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchDataProductReport error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ dataProductReport: [], });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchDataProductReport()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchDataTimelinSkill success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ dataTimelineSkill: [], meta:'test' });
    });
    const payload = {
      user: 'user',
      date: 'date'
    };

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchDataTimelinSkill(payload)(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchDataTimelinSkill error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ dataTimelineSkill: [], });
    });
    const payload = {
      user: 'user',
      date: 'date'
    };

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchDataTimelinSkill(payload)(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
});