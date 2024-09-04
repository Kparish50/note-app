import { useState } from 'react';

export default function NoteForm({ handleAddNote }) {

  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('green');

  const handleChangeTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleChangeText = (e) => {
    setNoteText(e.target.value);
  };

  const handleChangeColor = (e) => {
    if (backgroundColor === "green") {
      setBackgroundColor(e.target.value);
    } else if (backgroundColor === "yellow") {
      setBackgroundColor(e.target.value);
    } else if (backgroundColor === "red") {
      setBackgroundColor(e.target.value);
    } else {
      return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (noteTitle.trim().length && noteText.trim().length > 0) {
      handleAddNote(noteTitle, noteText, backgroundColor);
      setNoteTitle('')
      setNoteText('')
      setBackgroundColor('');
    }
  };

    return (
      <>
        <div>
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
            className="selectColor"
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
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </>
    );
}
