import { OPEN_CHORDS, CLOSE_CHORDS } from '../actions/Types.js';

const initialState = {
  modalOpen: false
};

function ToggleReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CHORDS: {
      //console.log(!state.modalOpen);
      return {
        modalOpen: action.open
      };
    }
    case CLOSE_CHORDS: {
      //console.log(!state.modalOpen);
      return {
        modalOpen: action.open
      };
    }
    default:
      return state;
  }
}

export default ToggleReducer;
