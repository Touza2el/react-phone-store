import React from "react";

function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="cart-item">
      <div className="cart-item-image box">
        <img
          src={img}
          alt="product"
          style={{ width: "6rem", height: "6rem" }}
        />
      </div>
      <div className="cart-item-title box">{title}</div>
      <div className="cart-item-price box">${price}</div>
      <div className="cart-item-btn box">
        <span onClick={() => decrement(id)}>-</span>
        <span>{count}</span>
        <span onClick={() => increment(id)}>+</span>
      </div>
      <div className="cart-item-delete box" onClick={() => removeItem(id)}>
        <i className="fas fa-trash"></i>
      </div>
      <div className="cart-item-total box">
        <strong>item total : </strong> $ {total}
      </div>
    </div>
  );
}

export default CartItem;
