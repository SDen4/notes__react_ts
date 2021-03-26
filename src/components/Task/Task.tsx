import React, { useState } from 'react';
import { connect } from 'react-redux';

import styles from './Task.module.scss';

interface IProps {
  save?: boolean | undefined;
  taskName: string;
  taskId: string;
  deleteTask?: any;
  editTask?: any;
}

const Task: React.FC<IProps> = ({
  save,
  taskName,
  taskId,
  deleteTask,
  editTask,
}) => {
  const saveFlag = save;
  const [editTaskFlag, setEditTaskFlag] = useState(false);
  const [newTask, setNewTask] = useState('');
  const deleteTaskHandler = () => {
    deleteTask(taskId);
  };

  const editTaskHandler = () => {
    setEditTaskFlag(true);
  };

  const newTaskHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setNewTask(value);
  };

  const saveNewTaskHandler = () => {
    if (!newTask.trim()) return null;
    editTask(newTask, taskId);
  };

  return (
    <div className={styles.component}>
      <div className={styles.title_wrapper}>
        <input type="checkbox" />
        {editTaskFlag ? (
          <input
            type="text"
            defaultValue={taskName}
            onChange={newTaskHandler}
          />
        ) : (
          <h4>{taskName}</h4>
        )}
      </div>
      {saveFlag && (
        <div className={styles.button__wrapper}>
          <button
            type="button"
            className={`${styles.button} ${styles.button_del}`}
            onClick={deleteTaskHandler}
          >
            Удалить
          </button>

          {editTaskFlag ? (
            <button
              type="button"
              className={styles.button}
              onClick={saveNewTaskHandler}
            >
              Сохранить
            </button>
          ) : (
            <button
              type="button"
              className={`${styles.button} ${styles.button_cancel}`}
              onClick={editTaskHandler}
            >
              Редактировать
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToPtops = (state: any) => {
  return {
    save: state.notes.save,
  };
};

export default connect(mapStateToPtops, null)(Task);
