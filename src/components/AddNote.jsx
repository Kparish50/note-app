import { useState } from "react"

export default function AddNote({ handleAddNote }) {
      const [ noteTitle, setNoteTitle ] = useState('');
      const [ noteText, setNoteText ] = useState('');

      const handleChangeTitle = (e) => {
        setNoteTitle(e.target.value)
      }

      const handleChangeText = (e) => {
        setNoteText(e.target.value);
      };

      const handleSubmit = () => {
          if (noteTitle.trim().length && noteText.trim().length > 0) {
          handleAddNote(noteTitle, noteText)
        }
      }

      return (
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
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
}