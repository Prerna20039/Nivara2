import React, { useState } from "react";
import ShopV from "./ShopV";

const Header = () => {
  const [showShopV, setShowShopV] = useState(false);

  const toggleShopV = (e) => {
    e.preventDefault();
    setShowShopV(!showShopV);
  };

  return (
    <>
      <header>
        <div className="search-head">
          <div className="logo">
            <img src="./logo.png" alt="Logo" />
            <h2>NIVARA</h2>
          </div>
          <div className="search">
            <input className="searchbox" type="text" placeholder="What are you looking for?" />
            <i className="fa-solid fa-magnifying-glass searchlogo"></i>
          </div>
          <button>Log In</button>
        </div>

        <nav>
          <ul>
            <li><a href="#">HOME</a></li>
            <li className="shopv">
              <a href="#" onClick={toggleShopV}>SHOP V</a>
            </li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">ABOUT US</a></li>
          </ul>

          <div className="icons">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-user"></i>
          </div>
        </nav>
      </header>

      {/* Show ShopV component right below the navbar */}
      {showShopV && <ShopV />}
    </>
  );
};

export default Header;
