import React, {useState} from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false)
  const cartName = inCart ? "in-cart" : ""
  const buttonName = inCart ? "Remove From Cart" : "Add to Cart"

  function handleAdd() {
    setInCart((inCart) => (!inCart))
  }
  
  return (
    <li className={cartName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{buttonName}</button>
    </li>
  );
}

export default Item;
