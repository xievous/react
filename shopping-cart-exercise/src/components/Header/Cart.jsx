import React from "react";
import "./cart.css";
import cart from "../Product/Product.jsx";

const Cart = () => {
  return (
    <div className="cart">
      <img src="" alt="" />
      <p className="cart__name">Cart</p>
      <p className="amount">{cart}</p>
    </div>
  );
};

export default Cart;
