import { combineReducers } from 'redux';
import KeyReducer from './KeyReducer.js';
import SelectionReducer from './SelectionReducer.js';

export default combineReducers({
  keys: KeyReducer,
  selections: SelectionReducer
});
