import React from 'react';
import { connect } from 'react-redux';

import styles from './Task.module.scss';

interface IProps {
  save?: boolean | undefined;
  taskName: string;
  taskId: string;
  deleteTask?: any;
}

const Task: React.FC<IProps> = ({ save, taskName, taskId, deleteTask }) => {
  const saveFlag = save;

  console.log('saveFlag', saveFlag);

  const deleteTaskHandler = () => {
    deleteTask(taskId);
  };

  return (
    <div className={styles.component}>
      <div className={styles.title_wrapper}>
        <input type="checkbox" />
        <h4>{taskName}</h4>
      </div>
      {saveFlag && (
        <button
          type="button"
          className={`${styles.button} ${styles.button_del}`}
          onClick={deleteTaskHandler}
        >
          Удалить
        </button>
      )}
    </div>
  );
};

const mapStateToPtops = (state: any) => {
  console.log('state in Task', state);
  return {
    save: state.notes.save,
  };
};

export default connect(mapStateToPtops, null)(Task);
