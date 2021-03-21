import React from 'react';

import styles from './Task.module.scss';

interface IProps {
  taskName: string;
}

const Task: React.FC<IProps> = ({ taskName }) => {
  const deleteTaskHandler = () => {
    console.log('task');
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
