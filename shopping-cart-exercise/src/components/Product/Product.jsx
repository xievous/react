import React from "react";
import "./product.css";

import { useState } from "react";
const Product = ({ addToCart }) => {
  const [product] = useState([
    {
      title: "One Piece vol 1",
      author: "Eichiro Oda",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Like a Dragon: Infinte Wealth",
      author: "RGG Studios",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Get Up [EP]",
      author: "NewJeans",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Bleach vol 1",
      author: "Tite Kubo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);

  const products = product.map((product, index) => {
    return (
      <article className="card" key={index}>
        <h2 className="card__title">{product.title}</h2>
        <h3 className="card__auth">{product.author}</h3>
        <p className="card__desc">{product.description}</p>
        <button className="card__button" onClick={addToCart}>
          Add to cart
        </button>
      </article>
    );
  });
  return (
    <div>
      {/*
      <section>
        <input
          type="text"
          name="title"
          value={addProductTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          name="desc"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={() => {
            setProduct([
              ...products,
              {
                title: addProductTitle,
                author: addProductAuthor,
                description: addProductDescription,
              },
            ]);
          }}
        >
          Add Product
        </button>

      </section>
        */}
      <section className="products"> {products}</section>
    </div>
  );
};

export default Product;
