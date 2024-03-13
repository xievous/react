import React, { useState } from "react";
import "./addnote.css";

const AddNote = () => {
  async function postNote() {
    try {
      const usernameInput = document.getElementById("username");
      const titleInput = document.getElementById("title");
      const noteInput = document.getElementById("note");

      const note = {
        username: usernameInput.value,
        title: titleInput.value,
        note: noteInput.value,
      };

      let response = await fetch(
        "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes",
        {
          method: "POST",
          body: JSON.stringify(note), // Gör om till ett JSON objekt
          headers: {
            "Content-Type": "application/json", // Berätta för servern att det vi skickar med är ett JSON objekt
          },
        }
      );
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />
      <label htmlFor="note">Note</label>
      <input type="text" id="note" />
      <button onClick={postNote}>Add note</button>
    </div>
  );
};

export default AddNote;
