import { combineReducers } from 'redux';
import { notesReducer } from './notesListReducer';

export const rootReducer = combineReducers({
  notes: notesReducer,
});
