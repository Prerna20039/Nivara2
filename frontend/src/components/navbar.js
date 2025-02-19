import React, { useState } from "react";
import { NavMenuPopup } from "./nav_popup"; // Ensure this file exists

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          Nivara
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {/* Home with Hover Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsShopOpen(true)}
            onMouseLeave={() => setIsShopOpen(false)}
          >
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            {/* Dropdown Menu (Popup) */}
            {isShopOpen && (
              <div className="absolute top-full left-0 mt-2 w-[300px] bg-white text-black shadow-lg rounded-md p-2 z-50 border border-gray-200">
                <NavMenuPopup isOpen={isShopOpen} />
              </div>
            )}
          </li>

          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-500 p-4 text-center space-y-2">
          <li>
            <a href="#" className="block py-2 hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-gray-300">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
