import React from 'react';
import Task from '../Task/Task';

import styles from './Note.module.scss';

interface IProps {
  noteTitle: string;
  noteTasks: any[];
  noteId: string;
  onRemove: (id: string) => void;
  onEdit: (id: string, title: string, tasks: any[]) => void;
}

const Note: React.FC<IProps> = (props) => {
  const { noteTitle, noteTasks, noteId, onRemove, onEdit } = props;

  return (
    <div className={styles.component}>
      <div className={styles.noteTop}>
        <h2>{noteTitle} </h2>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.button}
            onClick={() => onEdit(noteId, noteTitle, noteTasks)}
          >
            Изменить
          </button>
          <button
            className={`${styles.button} ${styles.button_del}`}
            onClick={() => onRemove(noteId)}
          >
            Удалить
          </button>
        </div>
      </div>
      {noteTasks.map((item: any) => {
        const { taskName, taskId } = item;
        return <Task taskName={taskName} taskId={taskId} key={Math.random()} />;
      })}
    </div>
  );
};

export default Note;
