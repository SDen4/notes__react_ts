import React from 'react';
import { connect } from 'react-redux';

import Note from '../Note/Note';

import styles from './NotesList.module.scss';

interface IProps {
  notes: any;
  onRemove: (id: string) => void;
}

const NotesList: React.FC<IProps> = ({ notes, onRemove }) => {
  console.log('notes: ', notes);

  if (!notes.length) {
    return (
      <div className={styles.noList}>
        <h2>Еще не создано ни одной заметки...</h2>
      </div>
    );
  }

  return notes.map((note: any) => (
    <Note
      noteTitle={note.noteTitle}
      noteTasks={note.tasks}
      noteId={note.id}
      key={note.id}
      onRemove={onRemove}
    />
  ));
};

const mapStateToPtops = (state: any) => {
  // console.log('state', state);
  return {
    notes: state.notes.notes,
  };
};

export default connect(mapStateToPtops, null)(NotesList);
