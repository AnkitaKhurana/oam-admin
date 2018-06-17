import { combineReducers } from 'redux';
import tempReducer from './tempReducer';

export default combineReducers({
  temp: tempReducer
});
