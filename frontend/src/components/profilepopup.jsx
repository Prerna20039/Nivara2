"use client";
import { FaUserCircle } from "react-icons/fa";

export function AccountMenuPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-start justify-end z-50"
      onClick={onClose} 
      // Clicking outside closes the popup
    >
      {/* Stop clicks inside the menu from closing */}
      <div
        className="relative mt-44 mr-4 w-64 bg-white shadow-lg rounded-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Green Top Section */}
        <div className="bg-[#5D8441] p-4 text-white flex items-center">
          <FaUserCircle className="w-12 h-12 mr-3" />
          <div>
            <div className="font-semibold text-base">Robert</div>
            <div className="text-sm">View your profile</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-3">
          <MenuItem iconClass="fa-solid fa-bag-shopping" label="Purchases and Reviews" />
          <MenuItem iconClass="fa-regular fa-message" label="Messages" />
          <MenuItem iconClass="fa-solid fa-gift" label="Special Offers" />
          <MenuItem iconClass="fa-solid fa-store" label="Sell your Products" />
          <MenuItem iconClass="fa-solid fa-gear" label="Account Settings" />
          <hr className="my-1" />
          <MenuItem iconClass="fa-solid fa-right-from-bracket" label="Sign Out" />
        </div>
      </div>
    </div>
  );
}

// Reusable menu item row
function MenuItem({ iconClass, label }) {
  return (
    <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
      <i className={`${iconClass} w-5 text-gray-600 mr-2`}></i>
      <span className="text-sm text-gray-800">{label}</span>
    </div>
  );
}
