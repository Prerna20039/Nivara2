import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ShopV from "./nav_popup";
import { LoginPopup } from "./loginpopup";
import { SignupPopup } from "./signup";
import { AccountMenuPopup } from "./profilepopup";

const Header = () => {
  const [showShopV, setShowShopV] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  const openLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeAll = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

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
            autoComplete="hidden"
          />
          <i className="fa-solid fa-magnifying-glass searchlogo"></i>
        </div>
        <button onClick={openLogin} className="bg-[#A7B65D] text-white px-4 py-2 rounded-md hover:bg-[#8C9E4B]">
          Log In
        </button>
      </div>

      {/* Login & Signup Popups */}
      <LoginPopup isOpen={showLogin} onClose={closeAll} onSwitchToSignup={openSignup} />
      <SignupPopup isOpen={showSignup} onClose={closeAll} onSwitchToLogin={openLogin} />

      {/* Navigation Menu */}
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={`hover:text-gray-300 ${location.pathname === "/" ? "text-[#5D8441] font-bold" : ""}`}
            >
              HOME
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleShopV}
              className={`hover:text-gray-300 ${showShopV ? "text-[#5D8441] font-bold" : ""}`}
            >
              SHOP V
            </button>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-gray-300 ${location.pathname === "/contact" ? "text-[#5D8441] font-bold" : ""}`}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-gray-300 ${location.pathname === "/about" ? "text-[#5D8441] font-bold" : ""}`}
            >
              ABOUT US
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="icons">
          <i className="fa-regular fa-heart"></i>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <i className="fa-regular fa-user" onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}></i>
        </div>

        {/* Account Menu Popup */}
        <AccountMenuPopup isOpen={isAccountMenuOpen} onClose={() => setIsAccountMenuOpen(false)} />
      </nav>

      {/* Show ShopV component below the navbar if toggled */}
      {showShopV && <ShopV />}
    </header>
  );
};

export default Header;
