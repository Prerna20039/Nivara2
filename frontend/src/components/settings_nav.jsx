import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SettingsNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { name: "Account", href: "/settings/account" },
    { name: "Points & Coupons", href: "/settings/points" },
    { name: "Location", href: "/settings/location" },
    { name: "Emails", href: "/settings/emails" },
  ];

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`py-4 px-2 border-b-2 ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SettingsNav;
