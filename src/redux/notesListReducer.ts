import {
  CREATE_NOTE,
  NEW_NOTE,
  DEL_NOTE,
  EDIT_NOTE,
  CANCEL_NOTE,
} from './constants';
import { ActionsType } from './actions';
import { InitialStateType, NoteType } from './types';

const initialState: InitialStateType = {
  notes: [],
  save: false,
};

export const notesReducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        notes: state.notes.concat([action.payload]),
        save: false,
      };

    case NEW_NOTE:
      return {
        ...state,
        save: true,
      };

    case DEL_NOTE:
      return {
        ...state,
        notes: state.notes.filter(
          (note: NoteType) => note.id !== action.payload,
        ),
      };

    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((item: NoteType) => {
          return item.id === action.payload.id ? action.payload : item;
        }),
        save: false,
      };

    case CANCEL_NOTE:
      return {
        ...state,
        save: false,
      };

    default:
      return state;
  }
};
