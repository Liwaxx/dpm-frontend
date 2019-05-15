import validateInput from '../../../utils/validateInput';

const validate = values => {
  const {
    Judul,
    Description,
    Location,
    createBy,

  } = values;
  const errors = {
    Judul: validateInput(Judul, ['required']),
    Description: validateInput(Description, ['required']),
    Location: validateInput(Location, ['required']),
    createBy: validateInput(createBy, ['required']),
    
  };

  return errors;
};


export default validate;