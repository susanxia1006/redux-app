import { SELECT_KEY_INDEX, SELECT_CAPO } from './Types.js';

export const SelectKey = (keyIndex) => ({
  type: SELECT_KEY_INDEX,
  keyIndex
});

export const SelectCapo = (capoIndex) => ({
  type: SELECT_CAPO,
  capoIndex
});
