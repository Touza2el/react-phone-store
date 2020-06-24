import React from "react";
import { Link } from "react-router-dom";

function CartTotal({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className="cart-total">
      <div className="cart-total-content">
        <div className="clear-btn">
          <Link to="/">
            <button type="button" onClick={() => clearCart()}>
              clear cart
            </button>
          </Link>
        </div>
        <div className="cart-sub-total">
          <span>subtotal : </span> <strong>$ {cartSubTotal}</strong>
        </div>
        <div className="cart-tax">
          <span>tax : </span> <strong>$ {cartTax}</strong>
        </div>
        <div className="cart-total">
          <span>total: </span> <strong>$ {cartTotal}</strong>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
