import React from "react";
import { useState } from "react";

const AddToCart = () => {
  const [amount, setAmount] = useState(0);

  return function addToCart() {
    setAmount(amount + 1);
    console.log(amount);
  };
};
export default AddToCart;
