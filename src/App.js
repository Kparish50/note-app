import { nanoid } from 'nanoid';
import React, { useState} from 'react';
import NoteForm from './components/NoteForm';
import Note from './components/Note';

function App() {
  const [ notes, setNotes ] = useState([ ]);
  const [backgroundColor, setBackgroundColor] = useState('green');
  

  const addNote = (title, text) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      backgroundColor: backgroundColor
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => { 
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }

  const changeColor = (e) => {
    if (backgroundColor === 'green') {
      setBackgroundColor(e.target.value);
    } else if (backgroundColor === 'yellow') {
      setBackgroundColor(e.target.value);
    } else if (backgroundColor === 'red') {
      setBackgroundColor(e.target.value);
    } else {
      return;
    }
  };

  return (
    <div>
      <h1>Make Some Notes</h1>
      <NoteForm
        notes={notes}
        backgroundColor={backgroundColor}
        handleAddNote={addNote}
        handleChangeColor={changeColor}
      />
      {notes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          text={note.text}
          backgroundColor={note.backgroundColor}
          handleDeleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;
