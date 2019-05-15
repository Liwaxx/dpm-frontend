import * as actions from '../action';
import fetch from '../../../utils/fetch';

jest.mock('../../../utils/fetch');

let dispatch = jest.fn();

describe('Actions', () => {
  it('calls dispatch when fetchValidator success', async () => {
    const mockFn = () => new Promise((resolve) => {
      resolve({ data: null });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchValidator()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('calls dispatch when fetchValidator error', async () => {
    const mockFn = () => new Promise((resolve, reject) => {
      reject({ data: null });
    });

    fetch.mockImplementation(mockFn);
    expect.assertions(1);
    await actions.fetchValidator()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
});