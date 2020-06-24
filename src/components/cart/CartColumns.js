import React from "react";

function CartColumns() {
  return (
    <div className="cart-columns">
      <div className="cart-columns-content">
        <div className="cart-columns-item">
          <p>products</p>
        </div>
        <div className="cart-columns-item">
          <p>name of product</p>
        </div>
        <div className="cart-columns-item">
          <p>price</p>
        </div>
        <div className="cart-columns-item">
          <p>quantity</p>
        </div>
        <div className="cart-columns-item">
          <p>remove</p>
        </div>
        <div className="cart-columns-item">
          <p>total</p>
        </div>
      </div>
    </div>
  );
}

export default CartColumns;
