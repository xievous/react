import React from "react";
import "./Image.css";
const img_link =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/417px-Ada_Lovelace_portrait.jpg?20130907213703";

const Image = () => {
  return <img src={img_link} alt="" />;
};

export default Image;
