import React from "react";
import { useNavigate } from "react-router-dom";

const ShopV = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="shopv-container">
      <div className="shopv-card">
        <div className="shopv-grid">
          {[
            { title: "Handmade or Crafts Business", items: ["Paintings", "Resin Art", "Art Prints"] },
            { title: "For Fashion & Accessories", items: ["Clothing", "Jewelry & Accessories", "Bags & Wallets"] },
            { title: "Customizables", items: ["---", "---", "---"] },
            { title: "Occasions or Themes", items: ["Seasonal Collections", "Festive Specials", "Birthday Gifts"] },
            { title: "Small Business Specials", items: ["Eco Friendly Products", "Limited Editions", "Support local Artisans"] },
          ].map((category, index) => (
            <div key={index} className="category">
              <h5 className="font-semibold text-gray-800">{category.title}</h5>
              <ul>
                {category.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    onClick={() => handleCategoryClick(item)}
                    className="cursor-pointer text-gray-700 hover:text-black transition duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopV;
