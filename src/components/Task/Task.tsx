import React from 'react';

import styles from './Task.module.scss';

interface IProps {
  taskName: string;
  taskId: string;
  deleteTask?: any;
}

const Task: React.FC<IProps> = ({ taskName, taskId, deleteTask }) => {
  const deleteTaskHandler = () => {
    deleteTask(taskId);
  };

  return (
    <div className={styles.component}>
      <div className={styles.title_wrapper}>
        <input type="checkbox" />
        <h4>{taskName}</h4>
      </div>
      <button
        type="button"
        className={`${styles.button} ${styles.button_del}`}
        onClick={deleteTaskHandler}
      >
        Удалить
      </button>
    </div>
  );
};

export default Task;
