import Note from './Note';
import AddNote from './AddNote';

export default function NoteForm({ notes, handleAddNote, handleDeleteNote }) {

    return (
      <div>
        {notes.map((note) => (
          <Note 
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
