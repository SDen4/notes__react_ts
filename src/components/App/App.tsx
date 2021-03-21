import React from 'react';
import AddNote from '../AddNote/AddNote';

import NotesList from '../NotesList/NotesList';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.component}>
      <h1 className={styles.title}>Заметки</h1>
      <NotesList notes={[]} />
      <button className={styles.button}>Создать заметку</button>
      <AddNote />
    </div>
  );
};

export default App;
