import validateInput from '../validateInput';

describe('validateInput', () => {
  it('given rule: required', () => {
    const expectValue = validateInput('', ['required']);
    const equal = 'Required';
    expect(expectValue).toEqual(equal);
  });

  it('given rule: max-20', () => {
    const value = `1234567890123456789012345678901234567890
    1234567890123456789012345678901234567890
    1234567890123456789012345678901234567890
    1234567890123456789012345678901234567890
    1234567890123456789012345678901234567890
    1234567890123456789012345678901234567890`;
    const expectValue = validateInput(value, ['max-255']);
    const equal = 'Must be 255 characters or less';
    expect(expectValue).toEqual(equal);
  });
});