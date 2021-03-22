import React from 'react';

import styles from './DelNoteModal.module.scss';

const DelNoteModal: React.FC = () => {
  return (
    <div className={styles.component}>
      <div className={styles.modal}>
        <h2>Вы уверены, что хотите удалить заметку {} ?</h2>
        <div className={styles.btns_wrapper}>
          <button
            type="button"
            className={`${styles.button} ${styles.button_del}`}
          >
            Удалить
          </button>
          <button type="button" className={styles.button}>
            Отмена
          </button>
        </div>
        <button type="button" className={styles.button_close}></button>
      </div>
    </div>
  );
};

export default DelNoteModal;
