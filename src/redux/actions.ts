import {
  CREATE_NOTE,
  NEW_NOTE,
  DEL_NOTE,
  EDIT_NOTE,
  CANCEL_NOTE,
} from './constants';
import { NoteType } from './types';

export const createNote = (note: NoteType) => {
  return {
    type: CREATE_NOTE,
    payload: note,
  } as const;
};

export const newNote = () => {
  return {
    type: NEW_NOTE,
    payload: true,
  } as const;
};

export const delNote = (id: string) => {
  return {
    type: DEL_NOTE,
    payload: id,
  } as const;
};

export const editNote = (note: NoteType) => {
  return {
    type: EDIT_NOTE,
    payload: note,
  } as const;
};

export const cancelNote = () => {
  return {
    type: CANCEL_NOTE,
  } as const;
};

type CreateNoteType = ReturnType<typeof createNote>;
type NewNoteType = ReturnType<typeof newNote>;
type DelNoteType = ReturnType<typeof delNote>;
type EditNoteType = ReturnType<typeof editNote>;
type CancelNoteType = ReturnType<typeof cancelNote>;

export type ActionsType =
  | CreateNoteType
  | NewNoteType
  | DelNoteType
  | EditNoteType
  | CancelNoteType;
