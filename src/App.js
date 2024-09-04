import { nanoid } from 'nanoid';
import React, { useState} from 'react';
import NoteForm from './components/NoteForm';
import Note from './components/Note';

function App() {
  const [ notes, setNotes ] = useState([ ])

  const addNote = (title, text) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
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
      <h1>Make Some Notes</h1>
      <NoteForm
        notes={notes}
        handleAddNote={addNote}
      />
      {notes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          text={note.text}
          handleDeleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;
