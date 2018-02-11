import { SELECT_KEY_INDEX, SELECT_CAPO } from '../actions/Types.js';

const initialState = {
  selectedKeyIndex: 0,
  selectedCapoIndex: 6,
  capoKeyIndex: 7

};

function SelectionReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_KEY_INDEX: {
      let capoKeyIndex = action.keyIndex + state.selectedCapoIndex + 1;
      capoKeyIndex = (capoKeyIndex >= 12) ? capoKeyIndex -= 12 : capoKeyIndex;
      return Object.assign({}, state, {
        selectedKeyIndex: action.keyIndex,
        capoKeyIndex
      });
    }

    case SELECT_CAPO: {
      let capoKeyIndex = action.capoIndex + state.selectedKeyIndex + 1;
      capoKeyIndex = (capoKeyIndex >= 12) ? capoKeyIndex -= 12 : capoKeyIndex;
      return Object.assign({}, state, {
        selectedCapoIndex: action.capoIndex,
        capoKeyIndex

      });
    }
    default:
      return state;
  }
}

export default SelectionReducer;
