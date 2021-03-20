import React from 'react';

import styles from './Note.module.scss';

interface IProps {
  num: number;
}

const Note: React.FC<IProps> = (props) => {
  const { num } = props;

  return (
    <>
      <h2 className={styles.noteTitle}>Note {num} </h2>
    </>
  );
};

export default Note;
