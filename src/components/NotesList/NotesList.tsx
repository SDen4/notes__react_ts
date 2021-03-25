import React from 'react';
import { connect } from 'react-redux';

import Note from '../Note/Note';

import styles from './NotesList.module.scss';

interface IProps {
  notes: any;
  onRemove: (id: string) => void;
  onEdit: (id: string, title: string, tasks: any) => void;
}

const NotesList: React.FC<IProps> = ({ notes, onRemove, onEdit }) => {
  console.log('notes: ', notes);

  if (!notes.length) {
    return (
      <div className={styles.noList}>
        <h2>Еще не создано ни одной заметки...</h2>
      </div>
    );
  }

  return notes.map((note: any) => {
    const { noteTitle, tasks, id } = note;
    return (
      <Note
        key={id}
        noteTitle={noteTitle}
        noteTasks={tasks}
        noteId={id}
        onRemove={onRemove}
        onEdit={onEdit}
      />
    );
  });
};

const mapStateToPtops = (state: any) => {
  console.log('state in NoteList', state);
  return {
    notes: state.notes.notes,
  };
};

export default connect(mapStateToPtops, null)(NotesList);
