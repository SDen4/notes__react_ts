import React from 'react';
import Task from '../Task/Task';

import styles from './Note.module.scss';

interface IProps {
  noteTitle: string;
  noteTasks: any;
  noteId: string;
  onRemove: (id: string) => void;
}

const Note: React.FC<IProps> = (props) => {
  const { noteTitle, noteTasks, noteId, onRemove } = props;

  // const delNoteHandler = (id: string) => {
  //   onRemove(id);
  // };

  return (
    <div className={styles.component}>
      <div className={styles.noteTop}>
        <h2 className={styles.noteTitle}>{noteTitle} </h2>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>Изменить</button>
          <button
            className={`${styles.button} ${styles.button_del}`}
            onClick={() => onRemove(noteId)}
          >
            Удалить
          </button>
        </div>
      </div>
      {noteTasks.map((item: any) => {
        console.log(item);
        const { taskName, taskId } = item;
        return <Task taskName={taskName} taskId={taskId} key={taskId} />;
      })}
    </div>
  );
};

export default Note;
