import {
  CREATE_NOTE,
  NEW_NOTE,
  DEL_NOTE,
  EDIT_NOTE,
  CANCEL_NOTE,
} from './types';

const initialState: any = {
  notes: [],
  save: false,
};

export const notesReducer = (state = initialState, action: any) => {
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
        notes: state.notes.filter((note: any) => note.id !== action.payload),
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((item: any) =>
          item.id === action.payload.id ? action.payload : item,
        ),
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
