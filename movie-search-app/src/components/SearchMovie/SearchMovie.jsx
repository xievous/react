import React, { useState } from "react";
import "./searchmovie.css";

const SearchMovie = ({ setMovies }) => {
  const [query, setQuery] = useState("Hej");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = async () => {
    const URL = "http://www.omdbapi.com/?apikey=37fe945a";
    const response = await fetch(`${URL}&s=${query}`);
    const data = await response.json();
    console.log(data);
    if (data.Search) {
      setMovies(data.Search);
      setErrorMessage(""); // Clear error message if movies are found
    } else {
      setMovies([]); // Set movies to empty array when no movie found
      setErrorMessage("No movies found."); // Set error message
    }
  };

  return (
    <div>
      <section>
        <label htmlFor="search">Film</label>
        <input type="text" id="search" onKeyUp={handleInput} />
        <button onClick={handleClick}>Sök film</button>
      </section>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SearchMovie;
