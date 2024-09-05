export default function Note({ id, title, text, handleDeleteNote, backgroundColor }) {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h1>{title}</h1>
      <p>{text}</p>
      <button onClick={() => handleDeleteNote(id)}>X</button>
    </div>
  );
}
