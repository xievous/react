import React, { useEffect } from "react";
import "./product.css";
import { useState } from "react";
const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(({ addToCart }) => {
    async function getProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
      console.log(data);
    }
    getProducts();
  }, []);

  const productComponents = products.map((product, index) => {
    return (
      <article className="card" key={index}>
        <h2 className="card__title">{product.title}</h2>
        <h3 className="card__auth">{product.price}</h3>
        <p className="card__desc">{product.description}</p>
        <img src={product.images[2]} alt="" />
        <button className="card__button" onClick={addToCart}>
          Add to Cart
        </button>
      </article>
    );
  });

  return (
    <div>
      <section className="products">{productComponents} </section>
    </div>
  );
};

export default Product;
