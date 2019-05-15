import validate from '../validate';

describe('Validate', () => {
  it('return no error given valid values', () => {
    const values = {
      Judul: 'tes',
      Description: 'tes',
      Location: 'tes',
      createBy: 'tes',
    };
    const assert = {
      Judul: '',
      Description: '',
      Location: '',
      createBy: '',
    };
    expect(validate(values)).toMatchObject(assert);
  });
});