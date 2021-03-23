import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { newNote } from '../../redux/actions';

import { DEL_NOTE } from '../../redux/types';

import AddNote from '../AddNote/AddNote';
import NotesList from '../NotesList/NotesList';
import DelNoteModal from '../DelNoteModal/DelNoteModal';

import styles from './App.module.scss';

interface IProps {
  save: boolean;
  newNote: any;
}

const App: React.FC<IProps> = ({ save, newNote }) => {
  const addNoteFlag = save;
  const dispatch = useDispatch();
  const [modalDelNote, setModalDelNote] = useState(false);
  const [delId, setDelId] = useState('');

  const addNoteHandler = () => {
    newNote();
  };

  // Запись id для удаления + вызов модалки
  const removeNoteHandler = (id: string) => {
    setDelId(id);
    setModalDelNote(true);
  };

  // Кнопки в модалке
  const onModal = (des: boolean) => {
    console.log(des);

    if (des === true) {
      dispatch({
        type: DEL_NOTE,
        payload: delId,
      });
      setDelId('');
      setModalDelNote(false);
    }

    if (des === false) {
      setDelId('');
      setModalDelNote(false);
    }
  };

  return (
    <div className={styles.component}>
      <h1 className={styles.title}>Заметки</h1>

      {!addNoteFlag && (
        <>
          <NotesList notes={[]} onRemove={removeNoteHandler} />
          <button className={styles.button} onClick={addNoteHandler}>
            Создать заметку
          </button>
        </>
      )}

      {addNoteFlag && <AddNote />}
      {modalDelNote && <DelNoteModal onModal={onModal} />}
    </div>
  );
};

const mapStateToPtops = (state: any) => {
  console.log('state in App', state);
  return {
    save: state.notes.save,
  };
};

const mapDispatchToProps = {
  newNote,
};

export default connect(mapStateToPtops, mapDispatchToProps)(App);
