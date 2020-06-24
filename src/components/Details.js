import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(data) => {
          const {
            id,
            title,
            img,
            price,
            company,
            info,
            inCart,
          } = data.detailProduct;
          return (
            <div className="details">
              <div className="deails-title">
                <h2>{title}</h2>
              </div>
              <div className="details-info">
                <div className="details-info-image">
                  <img src={img} alt="Phone" />
                </div>
                <div className="details-info-text">
                  <h3>model : {title}</h3>
                  <h4>made : {company}</h4>
                  <h4>
                    price : <span>$</span> {price}
                  </h4>
                  <p className="details-desc-title">
                    some info about the product :
                  </p>
                  <p>{info}</p>
                  <div className="details-info-btn">
                    <Link to="/">
                      <button className="back-to-product-btn">
                        back to product
                      </button>
                    </Link>
                    <button
                      className="add-to-cart-btn"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        data.addToCart(id);
                        data.openModal(id);
                      }}
                    >
                      {inCart ? "in Cart" : "add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
