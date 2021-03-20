import React from 'react';

import styles from './Task.module.scss';

const Task: React.FC = () => {
  return (
    <div className={styles.component}>
      <input type="checkbox" />
      <h3>Задача 101</h3>
    </div>
  );
};

export default Task;
