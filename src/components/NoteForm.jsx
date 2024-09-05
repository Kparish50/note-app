import { useState } from 'react';

export default function NoteForm({ backgroundColor, handleAddNote, handleChangeColor }) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const handleChangeTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleChangeText = (e) => {
    setNoteText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteTitle.trim().length && noteText.trim().length > 0) {
      handleAddNote(noteTitle, noteText);
      setNoteTitle('');
      setNoteText('');
    }
  };

  return (
    <>
      <div className="noteForm" style={{ backgroundColor: backgroundColor }}>
        <textarea
          value={noteTitle}
          onChange={handleChangeTitle}
          placeholder="Add Title"
        ></textarea>
        <textarea
          value={noteText}
          onChange={handleChangeText}
          placeholder="Add Text"
        ></textarea>
        <label htmlFor="select"></label>
        <select
          className="select-color"
          id="select"
          name="select"
          value={backgroundColor}
          onChange={handleChangeColor}
        >
          <option
            className="green"
            style={{ backgroundColor: '#018749' }}
            value="green"
          >
            TODO: Whenever
          </option>
          <option
            className="yellow"
            style={{ backgroundColor: '#FFFF00' }}
            value="yellow"
          >
            TODO: Tomorrow
          </option>
          <option
            className="red"
            style={{ backgroundColor: '#CC0000' }}
            value="red"
          >
            TODO: RIGHT NOW
          </option>
        </select>
        <button className="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
