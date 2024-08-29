import './App.css';
import React, { useState} from 'react';
import Notes from './components/Notes.jsx';
import WriteNotes from './components/WriteNotes.jsx';



function App() {
  const [ notes, setNotes ] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  }

  return (
    <div className="App">
      <h1>Note App</h1>
     <WriteNotes addNote={addNote}/>
     <Notes notes={notes}/>
    </div>
  );
}

export default App;
