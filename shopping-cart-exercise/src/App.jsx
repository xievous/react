import React from "react";
import Cart from "./components/Header/Cart";
import Product from "./components/Product/Product";
import "./App.css";

const App = () => {
  return (
    <div>
      <Cart />
      <section className="products">
        <Product Boktitel="The Great Gatsby" Författare="F. Scott Fitzgerald" />
        <Product Boktitel="To Kill a Mockingbird" Författare="Harper Lee" />
        <Product Boktitel="1984" Författare="George Orwell" />
        <Product Boktitel="TFT Guide" Författare="Khem Sama" />
      </section>
    </div>
  );
};

export default App;
