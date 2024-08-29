export default function Notes({ notes }) {

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <h3>{note.noteTitle}</h3>
          <p>{note.noteText}</p>
          <button>X</button>
        </li>
      ))}
    </ul>
  );
}
