import React from 'react';
import Task from '../Task/Task';

import styles from './TaskList.module.scss';

const TaskList: React.FC = () => {
  return (
    <div className={styles.component}>
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskList;
