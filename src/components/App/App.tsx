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

  const addNoteHandler = () => {
    newNote();
  };

  const removeNoteHandler = (id: string) => {
    console.log('id in App', id);
    dispatch({
      type: DEL_NOTE,
      payload: id,
    });
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
      {modalDelNote && <DelNoteModal />}
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
