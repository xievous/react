import React from "react";
import "./product.css";
import { useState } from "react";
const Product = (props) => {
  const { Boktitel, Författare } = props;
  const [cart, setCart] = useState(0);

  function addToCart() {
    setCart(cart + 1);
    console.log(cart);
  }

  return (
    <div>
      <article className="card">
        <h2 className="card__title">{Boktitel}</h2>
        <p className="card__auth">{Författare}</p>
        <p className="card__desc">
          How to write bible, how to win with jazz, how to get challenger in
          tft, how to code like a pro
        </p>
        <button className="card__button" onClick={addToCart}>
          <b>Add to cart</b>
        </button>
      </article>
    </div>
  );
};

export default Product;
