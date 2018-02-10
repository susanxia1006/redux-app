import { SELECT_KEY_INDEX, SELECT_CAPO } from './Types.js';

export const SelectKey = (keyIndex) => ({
  type: SELECT_KEY_INDEX,
  keyIndex
});

export const SelectCapo = (capo) => ({
  type: SELECT_CAPO,
  capo
});
