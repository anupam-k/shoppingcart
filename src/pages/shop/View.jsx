import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "./../../product";
import "./view.css";
function View() {
  const { id } = useParams();
  const item = PRODUCTS.find((post) => post.id == id);
  const { productImage, productName, price } = item;
  return (
    <main class="container">
      <div class="left-column">
        <img src={productImage} alt="" />
      </div>

      <div class="right-column">
        <div class="product-description">
          <h1>{productName}</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div class="product-price">
          <span>{price}</span>
          <a href="#" class="cart-btn">
            Add to cart
          </a>
        </div>
      </div>
    </main>
  );
}

export default View;
