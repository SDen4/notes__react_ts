import React from 'react';

import styles from './Task.module.scss';

interface IProps {
  taskName: string;
  taskId: string;
}

const Task: React.FC<IProps> = ({ taskName, taskId }) => {
  const deleteTaskHandler = () => {
    console.log('task Id', taskId);
  };

  return (
    <div className={styles.component}>
      <div className={styles.title_wrapper}>
        <input type="checkbox" />
        <h3>{taskName}</h3>
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
