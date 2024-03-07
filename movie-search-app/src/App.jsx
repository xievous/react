import React from "react";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import DisplayMovies from "./components/DisplayMovies/DisplayMovies";
import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <SearchMovie setMovies={setMovies} />
      <DisplayMovies movies={movies} />
    </div>
  );
};

export default App;
