import React, { useEffect, useState } from "react";
import AddNote from "./components/addNote/AddNote";
import Note from "./components/Note/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [username, setUsername] = useState("");

  async function getNotes() {
    const response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`
    );
    const data = await response.json();
    setNotes(data.notes);
    console.log(data);
  }

  const noteComponents = notes.map((note) => {
    return <Note note={note} key={note.id} />;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onKeyUp={(event) => {
          setUsername(event.target.value);
        }}
      />
      <button onClick={getNotes}>Get Notes</button>
      <section>{noteComponents}</section>
      <AddNote />
    </div>
  );
};

export default App;
