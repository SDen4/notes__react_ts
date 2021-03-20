import React from 'react';

import styles from './AddNote.module.scss';

const AddNote: React.FC = () => {
  return (
    <div className={styles.component}>
      <h2>Создание новой заметки</h2>

      <form onSubmit={() => null} className={styles.form}>
        <div className={styles.row}>
          <input type="text" placeholder="Введите название заметки" />
        </div>

        <div className={styles.row}>
          <input type="text" placeholder="Введите название задачи" />
          <button type="button" className={styles.button}>
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
