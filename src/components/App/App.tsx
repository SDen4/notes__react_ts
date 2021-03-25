import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { newNote, editNote, cancelNote } from '../../redux/actions';

import { DEL_NOTE } from '../../redux/types';

import AddNote from '../AddNote/AddNote';
import NotesList from '../NotesList/NotesList';
import DelNoteModal from '../DelNoteModal/DelNoteModal';

import styles from './App.module.scss';

interface IProps {
  save: boolean;
  newNote: any;
  editNote: any;
  cancelNote: any;
}

const App: React.FC<IProps> = ({ save, newNote, editNote, cancelNote }) => {
  const addNoteFlag = save;
  const dispatch = useDispatch();
  const [modalDelNote, setModalDelNote] = useState(false);
  const [delId, setDelId] = useState('');
  const [editDataArr, setEditDataArr] = useState({} as any);

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

  // Редактирование заметки
  const editNoteHandler = (
    editId: string,
    editTitle: string,
    editTasks: any,
  ) => {
    setEditDataArr({ editId, editTitle, editTasks });
    newNote();
  };

  const editClear = () => {
    setEditDataArr({});
  };

  return (
    <div className={styles.component}>
      <h1 className={styles.title}>Заметки</h1>

      {!addNoteFlag && (
        <>
          <NotesList
            notes={[]}
            onRemove={removeNoteHandler}
            onEdit={editNoteHandler}
          />
          <button className={styles.button} onClick={addNoteHandler}>
            Создать заметку
          </button>
        </>
      )}

      {addNoteFlag && (
        <AddNote
          editData={editDataArr}
          editClear={editClear}
          cancelNote={cancelNote}
        />
      )}
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
  editNote,
  cancelNote,
};

export default connect(mapStateToPtops, mapDispatchToProps)(App);
