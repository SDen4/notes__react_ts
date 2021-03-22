import { CREATE_NOTE, NEW_NOTE, DEL_NOTE } from './types';

export function createNote(note: any) {
  return {
    type: CREATE_NOTE,
    payload: note,
  };
}

export function newNote() {
  return {
    type: NEW_NOTE,
    payload: true,
  };
}

export function delNote(id: string) {
  return {
    type: DEL_NOTE,
    payload: id,
  };
}
