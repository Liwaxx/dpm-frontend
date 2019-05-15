import * as dateFormat from '../dateFormat';

const date = new Date(2018, 10, 22);

describe('dateFormat', () => {
  it('dateFormat change month', () => {
    const expectValue = dateFormat.changeMonth(date);
    const equal = 'November';
    expect(expectValue).toEqual(equal);
  });

  it('dateFormat change day', () => {
    const expectValue = dateFormat.changeDay(date);
    const equal = 'Kamis';
    expect(expectValue).toEqual(equal);
  });
});