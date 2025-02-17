import React from "react";

const Header = () => {
  return (
    <header>
      <div className="search-head">
        <div className="logo">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="search">
          <input
            className="searchbox"
            type="text"
            placeholder="what are you looking for ?"
          />
          <i class="fa-solid fa-magnifying-glass searchlogo"></i>
        </div>

        <button>Log In</button>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#" classN>HOME</a>
          </li>
          <li>
            <a href="#">SHOP V</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
        </ul>

        <div className="icons">
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-regular fa-user"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;