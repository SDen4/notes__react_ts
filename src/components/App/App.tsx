import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { newNote } from '../../redux/actions';

import { DEL_NOTE } from '../../redux/types';

import AddNote from '../AddNote/AddNote';
import NotesList from '../NotesList/NotesList';

import styles from './App.module.scss';

interface IProps {
  save: boolean;
  newNote: any;
}

const App: React.FC<IProps> = ({ save, newNote }) => {
  const addNoteFlag = save;
  const dispatch = useDispatch();

  const addNoteHandler = () => {
    newNote();
  };

  const removeNoteHandler = (id: string) => {
    console.log('id in App', id);
    dispatch({
      type: DEL_NOTE,
      payload: id,
    });
    // return null;
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
  // delNote
};

export default connect(mapStateToPtops, mapDispatchToProps)(App);
