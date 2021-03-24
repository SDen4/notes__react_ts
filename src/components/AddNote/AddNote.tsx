import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createNote, editNote } from '../../redux/actions';

// import { EDIT_NOTE, DEL_NOTE } from '../../redux/types';

import Task from '../Task/Task';

import styles from './AddNote.module.scss';

interface IProps {
  createNote: any;
  editNote: any;
  editData?: { editId: string; editTitle: string; editTasks: any };
  editClear: any;
}

const AddNote: React.FC<IProps> = ({
  createNote,
  editNote,
  editData,
  editClear,
}) => {
  // Название заметки
  const [noteTitle, setNoteTitle] = useState(
    editData?.editTitle ? editData?.editTitle : '',
  );
  // Новая задача
  const [noteTask, setNoteTask] = useState('');

  // Массив новых задач
  const [tasks, setTasks] = useState(
    editData?.editTasks ? editData?.editTasks : ([] as any),
  );

  // Получаю значение из инпута названия новой заметки
  const noteTitleHandler = (event: any) => {
    let value = event.target.value;
    setNoteTitle(value);
  };

  // Получаю значение из инпута новой задачи
  const noteTaskHandler = (event: any) => {
    let value = event.target.value;
    setNoteTask(value);
  };

  // Добавление новой задачи
  const submitTaskHandler = (event: any) => {
    event.preventDefault();

    // Защита от создания пустой задачи
    if (!noteTask.trim()) return null;

    // Объект новой задачи с id
    let noteTaskObj = { taskName: '', id: '', checked: false };

    noteTaskObj.taskName = noteTask;
    noteTaskObj.id = 'task_' + Date.now().toString();
    noteTaskObj.checked = false;

    // Добавить новую задачу в массив задач
    setTasks((prev: any) => [...prev, noteTaskObj]);

    // Очистить инпут после добавления
    setNoteTask('');
  };

  // Submit всей формы добавления новой заметки и всех задач
  const submitNoteHadler = (event: any) => {
    event.preventDefault();

    const newNote = {
      noteTitle,
      id: editData?.editId ? editData?.editId : 'note_' + Date.now().toString(),
      tasks,
    };

    // Защита от создания пустой заметки
    if (!newNote.noteTitle.trim()) return null;

    if (editData?.editTitle) {
      console.log('newNote', newNote);
      editNote(newNote);

      //Очистить editData
      //
      //
      editClear();
    } else {
      createNote(newNote);
    }
  };

  return (
    <div className={styles.component}>
      <h2>Создание новой заметки</h2>

      <form onSubmit={submitNoteHadler} className={styles.form}>
        <div className={styles.row}>
          <input
            type="text"
            defaultValue={noteTitle}
            onChange={noteTitleHandler}
            placeholder="Введите название заметки"
          />
        </div>

        {tasks.map((item: any) => {
          const { taskName, id } = item;
          return <Task taskName={taskName} taskId={id} key={id} />;
        })}

        <div className={styles.row}>
          <input
            type="text"
            value={noteTask}
            onChange={noteTaskHandler}
            placeholder="Введите название задачи"
          />
          <button
            type="button"
            className={styles.button}
            onClick={submitTaskHandler}
          >
            Добавить задачу
          </button>
        </div>

        <div className={styles.button_wrapper}>
          <button type="submit" className={styles.button}>
            Сохранить
          </button>

          <button
            type="button"
            className={`${styles.button} ${styles.button_del}`}
          >
            Удалить
          </button>

          <button
            type="reset"
            className={`${styles.button} ${styles.button_cancel}`}
          >
            Отмена
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
