import { nanoid } from 'nanoid';
import React, { useState} from 'react';
import NoteForm from './components/NoteForm';

function App() {
  const [ notes, setNotes ] = useState([{ 
    id: nanoid(),
    title: "Test",
    text: "Test for note"
  }])

  const addNote = (title, text) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => { 
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }

  return (
    <div>
      <NoteForm 
      notes={notes} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
