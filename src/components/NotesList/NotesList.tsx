import React from 'react';

import Note from '../Note/Note';

import styles from './NotesList.module.scss';

interface IProps {
  notes: any;
}

const NotesList: React.FC<IProps> = (props) => {
  const { notes } = props;

  if (!notes.length) {
    return (
      <div className={styles.noList}>
        <h2>Еще не создано ни одной заметки...</h2>
      </div>
    );
  }

  return notes.map((note: string) => <Note note={note} key={note} />);
  // return (
  //   <div className={styles.component}>
  //     <Note num={1} />
  //     <Note num={2} />
  //   </div>
  // );
};

export default NotesList;
