import React from "react";
import Cart from "./components/Header/Cart";
import Product from "./components/Product/Product";
import { useState } from "react";
import "./App.css";

const amount = useState(0);

function addToCart() {
  amount + 1;
}

const App = () => {
  return (
    <div>
      <Cart />
      <section>
        <Product />
      </section>
    </div>
  );
};

export default App;
