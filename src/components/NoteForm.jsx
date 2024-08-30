import Note from './Note';
import AddNote from './AddNote';

export default function NoteForm({ notes, handleAddNote, handleDeleteNote }) {
    console.log(notes)
    return (
      <div className="notes-list">
        {notes.map((note, index) => (<di>
          <Note
            key={index}
            id={note.id}
            title={note.title}
            text={note.text}
            handleDeleteNote={handleDeleteNote}
          />
        </di>
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    );
}
