
import AddNote from './AddNote';

export default function NoteForm({ notes, handleAddNote, handleDeleteNote }) {

    return (
      <div className="notes-list">
        {notes.map((note) => (
          <
            id={note.id}
            title={note.title}
            text={note.text}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    );
}
