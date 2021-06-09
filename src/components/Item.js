import {React, useState} from "react";

function Item({ name, category }) {

    let [cart, setCart] = useState(false)

    let addToCart = cart ? "in-cart" : ""

  return (
    <li className = {addToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setCart(true)}>Add to Cart</button>
    </li>
  );
}

export default Item;
