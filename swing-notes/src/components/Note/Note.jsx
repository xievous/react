import React from "react";
import DeleteNote from "../deleteNote/DeleteNote";

const Note = (props) => {
  const { note } = props;
  return (
    <div>
      <h1>{note.username}</h1>
      <h2>{note.title}</h2>
      <p>{note.note}</p>
      <DeleteNote id={note.id} />
    </div>
  );
};

export default Note;
