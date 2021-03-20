import React from 'react';

import NotesList from '../NotesList/NoteList';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.component}>
      <h1 className={styles.title}>Заметки</h1>
      <NotesList />
      <button className={styles.button}>Создать заметку</button>
    </div>
  );
};

export default App;
