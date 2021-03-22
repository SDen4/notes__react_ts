import React from 'react';
import { connect } from 'react-redux';
import { newNote } from '../../redux/actions';

import AddNote from '../AddNote/AddNote';
import NotesList from '../NotesList/NotesList';

import styles from './App.module.scss';

interface IProps {
  save: boolean;
  newNote: any;
}

const App: React.FC<IProps> = ({ save, newNote }) => {
  // Флаг формы добавления новой заметки

  const addNoteFlag = save;

  console.log('addNoteFlag:', addNoteFlag);

  // const [addNoteFlag, setAddNoteFlag] = useState(false);

  const addNoteHandler = () => {
    // setAddNoteFlag(!addNoteFlag);
    newNote();
  };

  return (
    <div className={styles.component}>
      <h1 className={styles.title}>Заметки</h1>

      {!addNoteFlag && (
        <>
          <NotesList notes={[]} />
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
};

export default connect(mapStateToPtops, mapDispatchToProps)(App);
