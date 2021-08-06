import React from 'react';
import { connect } from 'react-redux';

import { NoteType, TaskType } from '../../redux/types';

import Note from '../Note/Note';

import styles from './NotesList.module.scss';

type IProps = {
  notes: any;
  onRemove: (id: string) => void;
  onEdit: (id: string, title: string, tasks: TaskType[]) => void;
};

const NotesList: React.FC<IProps> = ({ notes, onRemove, onEdit }) => {
  if (!notes.length) {
    return (
      <div className={styles.noList}>
        <h2>Еще не создано ни одной заметки...</h2>
      </div>
    );
  }

  return notes.map((note: NoteType) => {
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
  return {
    notes: state.notes.notes,
  };
};

export default connect(mapStateToPtops, null)(NotesList);
