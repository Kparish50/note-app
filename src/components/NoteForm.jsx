import Note from './Note';
import AddNote from './AddNote';

export default function NoteForm({ notes, handleAddNote,  }) {

    return (
      <div>
        {notes.map((note) => (
          <Note id={note.id} title={note.title} text={note.text}/>
          ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    );
}
