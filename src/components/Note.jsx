export default function Note({ id, title, text, handleDeleteNote, backgroundColor }) {
  return (
    <div style={{ backgroundColor: backgroundColor }} className="note">
      <h1>{title}</h1>
      <p className="note-footer">{text}</p>
      <button className="delete-button" onClick={() => handleDeleteNote(id)}>X</button>
    </div>
  );
}
