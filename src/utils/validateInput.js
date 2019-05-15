export default function validateInput(value, rules) {
  let message = '';

  for (let idx = 0; idx < rules.length; idx++) {
    if (rules[idx] == 'required' && !value) {
      message = 'Required';
      break;
    } else if (rules[idx] == 'max-255' && value.length > 255) {
      message = 'Must be 255 characters or less';
      break;
    }
  }

  return message;
}