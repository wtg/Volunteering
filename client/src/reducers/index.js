import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import selectedReducer from './selectedReducer';

export default combineReducers({
  events: eventReducer,
  selected: selectedReducer
});
