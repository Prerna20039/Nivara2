import React from "react";
import "./shopV.css";


const ShopV = () => {
  return (
    <div className="shopv-container">
      <div className="shopv-card">
        <div className="shopv-grid">
          <div className="category">
            <h5 className="text-[#000000] font-medium text-[20px] ">Handmade or Crafts Business</h5>
            <ul className="text-[#5D8441] text-[18px]  font-inter">
              <li>Paintings</li>
              <li>Resin Art</li>
              <li>Art Prints</li>
            </ul>
          </div>
          <div className="category">
            <h5 className="text-[#000000] font-medium text-[20px]" >For Fashion & Accessories</h5>
            <ul className="text-[#5D8441] text-[18px]  font-inter">
              <li>Clothing</li>
              <li>Jewelry & Accessories</li>
              <li>Bags & Wallets</li>
            </ul>
          </div>
          <div className="category">
            <h5 className="text-[#000000] font-medium text-[20px]">Customizables</h5>
            <ul className="text-[#5D8441] text-[18px]  font-inter">
              <li>---</li>
              <li>---</li>
              <li>---</li>
            </ul>
          </div>
          <div className="category">
            <h5 className="text-[#000000] font-medium text-[20px]">Occasions or Themes</h5>
            <ul className="text-[#5D8441] text-[18px]  font-inter">
              <li>Seasonal Collections</li>
              <li>Festive Specials</li>
              <li>Birthday Gifts</li>
            </ul>
          </div>
          <div className="category">
            <h5 className="text-[#000000] font-medium text-[20px]">Small Business Specials</h5>
            <ul className="text-[#5D8441] text-[18px]  font-inter">
              <li>Eco Friendly Products</li>
              <li>Limited Editions</li>
              <li>Support local Artisans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopV;