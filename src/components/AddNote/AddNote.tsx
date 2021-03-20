import React, { useState } from 'react';

import styles from './AddNote.module.scss';

const AddNote: React.FC = () => {
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
    console.log(noteTask);
  };

  // Добавление новой задачи
  const submitTaskHandler = (event: any) => {
    event.preventDefault();
    console.log(noteTask);

    // Добавить новую задачу в массив задач
    setTasks([...tasks, noteTask]);

    // Очистить инпут после добавления
    setNoteTask('');
  };

  // Submit всей формы добавления новой заметки и всех задач
  const submitNoteHadler = (event: any) => {
    event.preventDefault();

    const newNote = {
      noteTitle,
      id: Date.now().toString(),
      tasks,
    };
    console.log(newNote);
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
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
