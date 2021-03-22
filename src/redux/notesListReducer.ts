import { CREATE_NOTE, NEW_NOTE } from './types';

const initialState: any = {
  notes: [],
  save: true,
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
    default:
      return state;
  }
};
