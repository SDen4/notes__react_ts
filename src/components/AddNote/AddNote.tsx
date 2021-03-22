import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../redux/actions';

import Task from '../Task/Task';

import styles from './AddNote.module.scss';

interface IProps {
  createNote: any;
}

const AddNote: React.FC<IProps> = ({ createNote }) => {
  // Название заметки
  const [noteTitle, setТoteTitle] = useState('');
  // Новая задача
  const [noteTask, setNoteTask] = useState('');
  // Массив новых задач
  const [tasks, setTasks] = useState([] as any);

  // Получаю значение из инпута названия новой заметки
  const noteTitleHandler = (event: any) => {
    let value = event.target.value;
    setТoteTitle(value);
  };

  // Получаю значение из инпута новой задачи
  const noteTaskHandler = (event: any) => {
    let value = event.target.value;
    setNoteTask(value);
    // console.log(noteTask);
  };

  // Добавление новой задачи
  const submitTaskHandler = (event: any) => {
    event.preventDefault();
    // console.log(noteTask);

    // Защита от создания пустой задачи
    if (!noteTask.trim()) return null;

    // Объект новой задачи с id
    let noteTaskObj = { taskName: '', id: '', checked: false };

    noteTaskObj.taskName = noteTask;
    noteTaskObj.id = 'task_' + Date.now().toString();
    noteTaskObj.checked = false;

    // Добавить новую задачу в массив задач
    // setTasks([...tasks, noteTaskObj]);
    setTasks((prev: any) => [...prev, noteTaskObj]);

    // Очистить инпут после добавления
    setNoteTask('');
    // console.log('tasks', tasks);
  };

  // Submit всей формы добавления новой заметки и всех задач
  const submitNoteHadler = (event: any) => {
    event.preventDefault();

    const newNote = {
      noteTitle,
      id: 'note_' + Date.now().toString(),
      tasks,
    };

    // Защита от создания пустой заметки
    if (!newNote.noteTitle.trim()) return null;

    // console.log(newNote);
    createNote(newNote);
  };

  return (
    <div className={styles.component}>
      <h2>Создание новой заметки</h2>

      <form onSubmit={submitNoteHadler} className={styles.form}>
        <div className={styles.row}>
          <input
            type="text"
            value={noteTitle}
            onChange={noteTitleHandler}
            placeholder="Введите название заметки"
          />
        </div>

        {/* Добавление новых задач при создании заметки */}
        {tasks.map((item: any) => {
          const { taskName, id } = item;

          // console.log(item);
          // console.log(tasks);
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
};

export default connect(null, mapDispatchToProps)(AddNote);
