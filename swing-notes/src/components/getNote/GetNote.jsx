import React, { useEffect, useState } from "react";

const GetNote = () => {
  const [username, setUsername] = useState("");
  const usernameValue = document.getElementById("#username");

  useEffect(() => {
    async function getNotes() {
      const response = await fetch(
        `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/:${username}`
      );
      const data = await response.json();
      setUsername(usernameValue.value);
      console.log(data);
    }
    getNotes();
  }, []);
  return (
    <div>
      <label htmlFor="username">User</label>
      <input type="text" id="username" />
      <button>Get User</button>
    </div>
  );
};

export default GetNote;
