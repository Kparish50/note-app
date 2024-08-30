import { useState } from "react"

export default function AddNote({ handleAddNote }) {
    const [ noteTitle, setNoteTitle ] = useState('');
    const [ noteText, setNoteText ] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
      handleAddNote({ noteTitle, noteText });
      setNoteTitle('');
      setNoteText('');
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Note Title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <textarea
            placeholder="Note Text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
    );
}