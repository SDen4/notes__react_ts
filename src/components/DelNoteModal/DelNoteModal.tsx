import React from 'react';

import styles from './DelNoteModal.module.scss';

interface IProps {
  onModal: (des: boolean) => void;
}

const DelNoteModal: React.FC<IProps> = (props) => {
  const { onModal } = props;

  return (
    <div className={styles.component}>
      <div className={styles.modal}>
        <h2>Вы уверены, что хотите удалить заметку {} ?</h2>
        <div className={styles.btns_wrapper}>
          <button
            type="button"
            className={`${styles.button} ${styles.button_del}`}
            onClick={() => onModal(true)}
          >
            Удалить
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => onModal(false)}
          >
            Отмена
          </button>
        </div>
        <button
          type="button"
          className={styles.button_close}
          onClick={() => onModal(false)}
        ></button>
      </div>
    </div>
  );
};

export default DelNoteModal;
