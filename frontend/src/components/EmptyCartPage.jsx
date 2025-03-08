import React from "react";
import { Link } from "react-router-dom";

const EmptyCartPage = () => {
  return (
    <div className="cart-container">
      {/* Title aligned to the most left */}
      <h1 className="cart-title">My Cart</h1>

      {/* Centered Empty Cart Content */}
      <div className="cart-content">
        <img src="/images/empty_cart.svg" alt="Empty Cart" className="cart-image" />

        <p className="cart-message">Oh! your Shopping Cart is Empty :(</p>
        <p className="cart-subtext">But it doesn’t have to be.</p>

        {/* Shop Now Button */}
        <Link to="/" className="shop-now-btn">Shop Now</Link>
      </div>
    </div>
  );
};

export default EmptyCartPage;
