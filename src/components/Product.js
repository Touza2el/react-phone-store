import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="product">
        <div className="product-content">
          <ProductConsumer>
            {(data) => (
              <React.Fragment>
                <div
                  className="product-image"
                  onClick={() => data.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="product" />
                  </Link>
                </div>
                <button
                  className="product-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    data.addToCart(id);
                    data.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="product-btn-text" disabled>
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus"></i>
                  )}
                </button>
              </React.Fragment>
            )}
          </ProductConsumer>
          <div className="product-footer">
            <p className="product-title">{title}</p>
            <h5 className="product-price">
              <span>$</span>
              {price}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
