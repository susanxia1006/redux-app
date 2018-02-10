import { SELECT_KEY_INDEX, SELECT_CAPO } from '../actions/Types.js';

const initialState = {
  selectedKeyIndex: 0,
  selectedCapo: 7

};

function SelectionReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_KEY_INDEX: {
      return Object.assign({}, state, {
        selectedKeyIndex: action.keyIndex
      });
    }

    case SELECT_CAPO: {
      return Object.assign({}, state, {
        selectedCapo: action.capo
      });
    }
    default:
      return state;
  }
}

export default SelectionReducer;
