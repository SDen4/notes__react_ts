import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createNote, editNote } from '../../redux/actions';

import Task from '../Task/Task';

import styles from './AddNote.module.scss';

type IProps = {
  createNote: any;
  editNote: any;
  cancelNote: any;
  editData?: { editId: string; editTitle: string; editTasks: any };
  editClear: any;
};

const AddNote: React.FC<IProps> = ({
  createNote,
  editNote,
  cancelNote,
  editData,
  editClear,
}) => {
  const [noteTitle, setNoteTitle] = useState<string>(
    editData?.editTitle ? editData?.editTitle : '',
  );

  const [noteTask, setNoteTask] = useState<string>('');

  const [tasks, setTasks] = useState(
    editData?.editTasks ? editData?.editTasks : ([] as any),
  );

  const noteTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setNoteTitle(value);
  };

  const noteTaskHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setNoteTask(value);
  };

  const submitTaskHandler = (event: any) => {
    event.preventDefault();

    if (!noteTask.trim()) return null;

    let noteTaskObj = { taskName: '', id: '', checked: false };

    noteTaskObj.taskName = noteTask;
    noteTaskObj.id = 'task_' + Date.now().toString();
    noteTaskObj.checked = false;

    setTasks((prev: any) => [...prev, noteTaskObj]);
    setNoteTask('');
  };

  const submitNoteHadler = (event: any) => {
    event.preventDefault();

    const newNote = {
      noteTitle,
      id: editData?.editId ? editData?.editId : 'note_' + Date.now().toString(),
      tasks,
    };

    if (!newNote.noteTitle.trim()) return null;

    if (editData?.editTitle) {
      editNote(newNote);
      editClear();
    } else {
      createNote(newNote);
    }
  };

  const cancelSaveHandler = () => {
    cancelNote();
    editClear();
  };

  const deleteTask = (idDeleteTask: string) => {
    const newTasksList = tasks.filter((task: any) => task.id !== idDeleteTask);
    setTasks(newTasksList);
  };

  const editTask = (newTask: string, editTaskId: string) => {
    const newEditTask = { taskName: newTask, id: editTaskId, checked: false };
    const newTasksList = tasks.map((task: any) =>
      task.id === editTaskId ? newEditTask : task,
    );
    setTasks(newTasksList);
  };

  return (
    <div className={styles.component}>
      <h2>???????????????? ?????????? ??????????????</h2>

      <form onSubmit={submitNoteHadler} className={styles.form}>
        <div className={styles.subtitle}>???????????????? ??????????????</div>
        <div className={styles.row}>
          <input
            type="text"
            defaultValue={noteTitle}
            onChange={noteTitleHandler}
            placeholder="?????????????? ???????????????? ??????????????"
          />
        </div>

        <div className={styles.row}>
          <input
            type="text"
            value={noteTask}
            onChange={noteTaskHandler}
            placeholder="?????????????? ???????????????? ????????????"
          />
          <button
            type="button"
            className={styles.button}
            onClick={submitTaskHandler}
          >
            ???????????????? ????????????
          </button>
        </div>

        {tasks.length ? (
          <div className={styles.subtitle}>???????????? ??????????:</div>
        ) : null}

        {tasks.map((item: any) => {
          const { taskName, id } = item;
          return (
            <Task
              taskName={taskName}
              taskId={id}
              key={Math.random()}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        })}

        <div className={styles.button_wrapper}>
          <button type="submit" className={styles.button}>
            ??????????????????
          </button>

          <button
            type="reset"
            className={`${styles.button} ${styles.button_cancel}`}
            onClick={cancelSaveHandler}
          >
            ????????????
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createNote,
  editNote,
};

export default connect(null, mapDispatchToProps)(AddNote);
