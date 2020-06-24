import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li className="nav-bar-logo">
            <Link to="/">shopOne</Link>
          </li>
          <li className="nav-bar-product">
            <Link to="/">product</Link>
          </li>
          <li className="nav-bar-cart">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-text">cart</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
