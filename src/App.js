import { nanoid } from 'nanoid';
import React, { useState} from 'react';
import NoteForm from './components/NoteForm';

function App() {
  const [ notes, setNotes ] = useState([{ 
    id: nanoid(),
    title: "Test",
    text: "Test for note"
  }])

  const addNote = (text, title) => {
    const newNote = {
      id: nanoid(),
      title: title,
      test: text
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  return (
    <div>
      <NoteForm notes={notes} handleAddNote={addNote}/>
    </div>
  );
}

export default App;
