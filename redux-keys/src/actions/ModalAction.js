import { OPEN_CHORDS, CLOSE_CHORDS } from './Types.js';

export const OpenChords = () => ({
  type: OPEN_CHORDS,
  open: true
});

export const CloseChords = () => ({
  type: CLOSE_CHORDS,
  open: false
});
