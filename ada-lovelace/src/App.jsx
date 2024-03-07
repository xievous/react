import React from "react";
import Title from "./components/Title/Title.jsx";
import Image from "./components/Image/Image.jsx";
import About from "./components/About/About.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="grid">
      <Title />
      <Image />
      <About />
    </div>
  );
};

export default App;
