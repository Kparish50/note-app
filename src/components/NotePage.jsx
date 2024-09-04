import { useState } from 'react';
import Note from './Note';


export default function NotePage({ notes, handleAddNote, handleDeleteNote }) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const handleChangeTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleChangeText = (e) => {
    setNoteText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (noteTitle.trim().length && noteText.trim().length > 0) {
      handleAddNote(noteTitle, noteText);
    }
  };

    return (
      <>
      <div>
        <textarea
        value={noteTitle}
        onChange={handleChangeTitle}
        placeholder="Add Title"
        >  
        </textarea>
        <textarea
        value={noteText}
        onChange={handleChangeText}
        placeholder="Add Text"
        >
        </textarea>
        <label  htmlFor="select">
        </label>
        <select id="select" name="select" value="selectcolor" >
          <option value="green">TODO: Later</option> 
          <option value="yellow">TODO: Tomorrow</option>
          <option value="red">TODO: RIGHT NOW</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {notes.map((note) => (
          <Note 
          id={note.id} 
          title={note.title} 
          text={note.text}
          color={note.color}
          handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
      </>
    );
}
