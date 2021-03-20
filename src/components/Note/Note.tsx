import React from 'react';
import TaskList from '../TaskList/TaskList';

import styles from './Note.module.scss';

interface IProps {
  num: number;
}

const Note: React.FC<IProps> = (props) => {
  const { num } = props;

  return (
    <div className={styles.component}>
      <div className={styles.noteTop}>
        <h2 className={styles.noteTitle}>Заметка {num} </h2>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>Изменить</button>
          <button className={`${styles.button} ${styles.button_del}`}>
            Удалить
          </button>
        </div>
      </div>
      <TaskList />
    </div>
  );
};

export default Note;
