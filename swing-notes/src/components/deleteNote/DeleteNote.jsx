import React from "react";
import "./deletenote.css";

const DeleteNote = (props) => {
  const { id } = props;
  async function deleteNotes() {
    const response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${
        (id,
        {
          method: "DELETE",
        })
      }`
    );
    const data = await response.json();
    console.log(data);
  }

  return <button onClick={deleteNotes}>Delete</button>;
};

export default DeleteNote;
