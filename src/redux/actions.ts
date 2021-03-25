import {
  CREATE_NOTE,
  NEW_NOTE,
  DEL_NOTE,
  EDIT_NOTE,
  CANCEL_NOTE,
} from './types';

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

export function editNote(note: any) {
  return {
    type: EDIT_NOTE,
    payload: note,
  };
}

export function cancelNote() {
  return {
    type: CANCEL_NOTE,
  };
}
