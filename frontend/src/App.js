import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCard from "./components/productcard";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExclusiveOfferCarousel from "./components/exculsiveOffer";
import CustomizableSection from "./components/CustomizableSection";
import FeedbackCorner from "./components/feedback";
import Footer from "./components/footer";
import PreHeader from "./components/PreHeader";
import TopBanner from "./components/TopBanner";
import EmptyCartPage from "./components/EmptyCartPage";
import ShopV from "./components/ShopV";
import CategoryPage from "./components/CategoryPage";
import AccountSettings from "./pages/Sell_your_products/page";
import Create_seller_account from "./pages/Create_seller_account/page";
import CreateShop from "./pages/shop_registeration/page";
import SellerDashboard from "./pages/seller_Dashboard/page";
import AccountSetting from "./pages/settings/account/page";
import EmailSettings from "./pages/settings/emails/page";
import ContactPage from "./pages/contact/page";
import ProductPage from "./pages/Product Detail Page/page";

export default function App() {
  const products = [
    {
      title: "Wireless Headphones",
      price: 2999,
      rating: 4.5,
      image: "/images/product1.svg",
      isNew: true,
    },
    {
      title: "Smart Watch",
      price: 4999,
      rating: 4.2,
      image: "/images/product2.svg",
      isNew: true,
    },
    {
      title: "Bluetooth Speaker",
      price: 1999,
      rating: 4.7,
      image: "/images/product3.svg",
      isNew: true,
    },
  ];

  return (
    <>

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div className="overflow-hidden">
              <TopBanner />
              <div className="mt-12"><Header /></div>
              <div className="mt-4"><Hero /></div>


              <section className="max-w-6xl mx-auto mt-12 px-4 lg:px-20">
                <h1 className="text-[40px] text-[#4D6E3D] font-normal text-center mb-8">
                  Best Selling Products
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>

                <div className="w-[224px] h-[65px] border-2 border-[#2C4F1D] rounded-3xl text-[#2C4F1D] p-4 text-[25px] flex items-center justify-center gap-2 mx-auto my-20 cursor-pointer hover:bg-[#2C4F1D] hover:text-white transition duration-300">
                  See More
                  <img src="/images/right_arrow.svg" className="w-6 h-6" alt="Arrow" />
                </div>
              </section>

              <ExclusiveOfferCarousel />
              <CustomizableSection />
              <FeedbackCorner />
              <Footer />
            </div>
          }
        />

        {/* Cart Page */}
        <Route path="/cart" element={<div> <TopBanner />
      <div className="mt-9"><Header /></div> <EmptyCartPage /> <Footer /> </div>} />

        {/* Shop Categories Page */}
        <Route path="/shop" element={<ShopV />} />

        {/* Category Page (When a category is clicked) */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/sell" element={<div><TopBanner /> <div className="mt-9"><Header /></div> <AccountSettings /> <Footer/></div>} />
        <Route path="/create_account" element={<div><Create_seller_account/></div>} />
        <Route path="/shop_register" element={<CreateShop />} />
        <Route path="/seller_dashboard" element={<SellerDashboard />} />
        <Route path="/settings/account" element={<div><TopBanner /> <div className="mt-9"><Header /></div><AccountSetting/><Footer/></div>} />
        <Route path="/settings/emails" element={<div><TopBanner /> <div className="mt-9"><Header /></div><EmailSettings/><Footer/></div>} />
        <Route path="/contact" element={<div><TopBanner /> <div className="mt-9"><Header /></div><ContactPage/><Footer/></div>} />



      </Routes>
      
      </>
  );
}
