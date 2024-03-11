import React from "react";
import Cart from "./components/Header/Cart";
import Product from "./components/Product/Product";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [amount, setAmount] = useState(0);

  function addToCart() {
    setAmount(amount + 1);
    console.log(amount + 1);
  }

  return (
    <div>
      <Cart amount={amount} />
      <section>
        <Product addToCart={addToCart} />
      </section>
    </div>
  );
};

export default App;
