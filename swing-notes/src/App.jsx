import React, { useEffect, useState } from "react";
import AddNote from "./components/addNote/AddNote";
import GetNote from "./components/getNote/GetNote";

const App = () => {
  return (
    <div>
      <GetNote />
      <AddNote />
    </div>
  );
};

export default App;
