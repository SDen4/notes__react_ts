import { CREATE_NOTE } from './types';

export function createNote(note: any) {
  return {
    type: CREATE_NOTE,
    payload: note,
  };
}
