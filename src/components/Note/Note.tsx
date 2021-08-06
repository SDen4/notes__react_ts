import React from 'react';

import { TaskType } from '../../redux/types';

import Task from '../Task/Task';

import styles from './Note.module.scss';

type IProps = {
  noteTitle: string;
  noteTasks: TaskType[];
  noteId: string;
  onRemove: (id: string) => void;
  onEdit: (id: string, title: string, tasks: TaskType[]) => void;
};

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
      {noteTasks.map((item: TaskType) => {
        const { taskName, id } = item;
        return <Task taskName={taskName} taskId={id} key={Math.random()} />;
      })}
    </div>
  );
};

export default Note;
