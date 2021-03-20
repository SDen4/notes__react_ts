import React from 'react';

import Note from '../Note/Note';

import styles from './NotesList.module.scss';

const NotesList: React.FC = () => {
  return (
    <div className={styles.component}>
      <h1 className={styles.title}>Notes list</h1>

      <Note num={1} />
      <Note num={2} />
    </div>
  );
};

export default NotesList;
