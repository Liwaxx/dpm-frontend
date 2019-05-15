import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import personal from '../pages/Personal/reducer';
import snackbar from './snackbar';
import talent from '../pages/ProductAndTalent/reducer';
import validator from '../pages/Validator/reducer';

const rootReducer = combineReducers({
  personal,
  routing: routerReducer,
  snackbar,
  talent,
  validator,
});

export default rootReducer;
