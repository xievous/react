import React from "react";
import "./cart.css";

const Cart = ({ amount }) => {
  return (
    <div className="cart">
      <p className="cart__name">Cart</p>
      <p className="amount">{amount}</p>
    </div>
  );
};

export default Cart;
