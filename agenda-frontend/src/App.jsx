import axios from "axios";
import Note from "./components/Note";
import "./App.css";

function App() {
  // O array de notes continua aqui
  axios
    .get("http://localhost:8000/api/notes/")
    .then((res) => console.log(res));

  return (
    <div className="App">
      {notes.map((note) => (
        <Note key={`note__${note.id}`} title={note.title}>
          {note.content}
        </Note>
      ))}
    </div>
  );
}

export default App;