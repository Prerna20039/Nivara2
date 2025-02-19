import React, { useState } from "react";
// Ensure the correct path
import ShopV from "./nav_popup";
import { LoginSignupPopup } from "./login_signup";
import { AccountMenuPopup } from "./profilepopup";

const Header = () => {
  const [showShopV, setShowShopV] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const toggleShopV = (e) => {
    e.preventDefault();
    setShowShopV(!showShopV);
  };

  return (
    <header>
      {/* Search Head */}
      <div className="search-head">
        <div className="logo">
          <img src="/images/logo.svg" alt="Nivara Logo" />
        </div>
        <div className="search">
          <input
            className="searchbox"
            type="text"
            placeholder="What are you looking for?"
          />
          <i className="fa-solid fa-magnifying-glass searchlogo"></i>
        </div>
        <button  onClick={() => setPopupOpen(true)}
        className="bg-[#A7B65D] text-white px-4 py-2 rounded-md hover:bg-[#8C9E4B]">Log In</button>
      </div>
      <LoginSignupPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
      {/* Navigation Menu */}
      <nav>
        <ul>
          <li>
            <a href="#" className="hover:text-gray-300">HOME</a>
          </li>

          {/* SHOP with Popup on Hover */}
          <li className="relative">
              <a href="#" onClick={toggleShopV}>SHOP V</a> 
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">CONTACT</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">ABOUT US</a>
          </li>
        </ul>

        {/* Icons */}
        <div className="icons">
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-regular fa-user"  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}></i>
        </div>
        <AccountMenuPopup
        isOpen={isAccountMenuOpen}
        onClose={() => setIsAccountMenuOpen(false)}
      />
      </nav>
      {showShopV && <ShopV />}
    </header>
  
  );
};

export default Header;
