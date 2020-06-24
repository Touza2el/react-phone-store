import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(data) => {
          const { modalOpen, closeModal } = data;
          const { img, title, price } = data.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal">
                <div className="modal-container">
                  <h2 className="modal-title">added to the cart</h2>
                  <img src={img} alt="product" />
                  <h5>{title}</h5>
                  <h5>price : $ {price}</h5>
                  <Link to="/">
                    <button className="modal-btn" onClick={() => closeModal()}>
                      back to store
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button className="modal-btn" onClick={() => closeModal()}>
                      go to cart
                    </button>
                  </Link>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
