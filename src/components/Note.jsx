export default function Note({ id, title, text, handleDeleteNote }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <button>X</button>
    </div>
  );
}
