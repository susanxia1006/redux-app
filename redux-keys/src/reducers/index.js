import { combineReducers } from 'redux';
import KeyReducer from './KeyReducer.js';
import SelectionReducer from './SelectionReducer.js';
import ToggleReducer from './ToggleReducer.js';

//console.log(ToggleReducer().modalOpen);

export default combineReducers({
  keys: KeyReducer,
  selections: SelectionReducer,
  toggle: ToggleReducer
});
