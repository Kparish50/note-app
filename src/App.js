import './App.css';
import React, { useState} from 'react';
import NoteForm from './components/NoteForm';
import Note from './components/Note';

function App() {
  const [ notes, setNotes ] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  }

  return (
    <div className="App">
      <h1>Note App</h1>
     <NoteForm addNote={addNote}/>
     <Note notes={notes}/>
    </div>
  );
}

export default App;
