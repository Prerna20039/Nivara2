"use client";

import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    image: "/images/offer_img.svg",
    title: "Exclusive Offer - Perfume",
    description: "Unlock the ultimate scent upgrade with our exclusive offer. Enjoy savings up to 40% off on our latest New Arrivals.",
  },
  {
    id: 2,
    image: "/images/product1.svg",
    title: "Special Deal - Watches",
    description: "Get 30% off on premium watches. Timeless elegance at unbeatable prices.",
  },
  {
    id: 3,
    image: "/images/product2.svg",
    title: "Mega Sale - Bags",
    description: "Luxury bags now at an amazing discount. Save up to 50% today!",
  },
  {
    id: 4,
    image: "/images/product3.svg",
    title: "Exclusive Discount - Shoes",
    description: "Step up your style with 35% off on our latest shoe collection.",
  },
  {
    id: 5,
    image: "/images/offer_img2.jpeg",
    title: "Fashion Deal - Sunglasses",
    description: "Cool shades at cool prices. Grab yours with 20% discount now!",
  },
];

export default function ExclusiveOfferCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 18, minutes: 45 });

  // Automatically switch products every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes } = prevTime;

        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;
          if (hours > 0) {
            hours--;
          } else {
            hours = 23;
            if (days > 0) {
              days--;
            } else {
              clearInterval(timer);
              return prevTime;
            }
          }
        }

        return { days, hours, minutes };
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto h-[549px] bg-[#E3FCBF] rounded-lg overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid grid-cols-12 h-full transition-opacity duration-700 ease-in-out">
        {/* Image Section (40%) */}
        <div className="col-span-12 md:col-span-5 relative w-full h-full">
          <img
            src={products[currentIndex].image}
            alt={products[currentIndex].title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section (60%) */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center space-y-6 p-8 pl-24">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C5530]">
            {products[currentIndex].title}
          </h2>

          <p className="text-[#2C5530] text-lg">{products[currentIndex].description}</p>

          {/* Timer */}
          <div className="flex gap-4">
            <div className="bg-white rounded-lg p-4 text-center min-w-[80px]">
              <div className="text-2xl font-bold text-[#2C5530]">{String(timeLeft.days).padStart(2, "0")}</div>
              <div className="text-sm text-[#2C5530]/80">Days</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center min-w-[80px]">
              <div className="text-2xl font-bold text-[#2C5530]">{String(timeLeft.hours).padStart(2, "0")}</div>
              <div className="text-sm text-[#2C5530]/80">Hours</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center min-w-[80px]">
              <div className="text-2xl font-bold text-[#2C5530]">{String(timeLeft.minutes).padStart(2, "0")}</div>
              <div className="text-sm text-[#2C5530]/80">Min</div>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#2C5530] hover:bg-[#2C5530]/90 text-white w-fit h-fit px-8 py-4 text-lg rounded-full">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
