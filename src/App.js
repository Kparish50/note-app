import './App.css';
import { nanoid } from 'nanoid';
import React, { useState} from 'react';
import NoteForm from './components/NoteForm';

function App() {

  const [ notes, setNotes ] = useState([ { id: nanoid(), title: '', text: ''} ]);


  const addNote = (text) => {
    const newNote = { id: nanoid(), title: text, text: text };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div>
      <div>
        <NoteForm
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App;
