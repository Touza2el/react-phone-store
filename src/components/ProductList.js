import React, { Component } from "react";
import Title from "./Title";
import Product from "./Product";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        <Title title="our product" />
        <div className="product-list-content">
          <ProductConsumer>
            {(data) => {
              return data.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default ProductList;
