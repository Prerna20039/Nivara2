"use client";

import { useState } from "react";
import Home from "../../components/seller dashboard components/home";
import Products from "../../components/seller dashboard components/products";
import Orders from "../../components/seller dashboard components/orders";
import Messages from "../../components/seller dashboard components/messages";
import MyProfile from "../../components/seller dashboard components/my_profile";

export default function SellerDashboard() {
  const [activeSection, setActiveSection] = useState("Home");

  const sections = [
    { name: "Home", component: <Home />},
    { name: "Products", component: <Products /> },
    { name: "Orders", component: <Orders /> },
    { name: "Messages", component: <Messages /> },
    { name: "My Profile", component: <MyProfile /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-48 bg-green-50 p-4">
        <img src="/images/logo.svg" className="w-[200px] p-5" alt="Logo" />
        <nav className="flex flex-col space-y-5 pt-20">
          {sections.map((section) => (
            <button
              key={section.name}
              className={`py-2 px-4 rounded font-medium text-left ${
                activeSection === section.name ? "bg-green-100" : "hover:bg-green-100"
              }`}
              onClick={() => setActiveSection(section.name)}
            >
              {section.name.toUpperCase()}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content - Render selected section */}
      <main className="flex-1 p-8">
        {sections.find((section) => section.name === activeSection)?.component}
      </main>
    </div>
  );
}
