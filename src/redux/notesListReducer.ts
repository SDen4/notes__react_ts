import { CREATE_NOTE } from './types';

const initialState: any = {
  notes: [],
};

export const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_NOTE:
      return { ...state, notes: state.notes.concat([action.payload]) };
    default:
      return state;
  }
};
