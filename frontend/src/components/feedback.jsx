"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const feedbacks = [
  { id: 1, name: "John Doe", message: "Exceptional products! The quality exceeded my expectations, and everything was exactly as described. I'll definitely be back for more." },
  { id: 2, name: "Sarah Lee", message: "Exceptional products! The quality exceeded my expectations, and everything was exactly as described. I'll definitely be back for more." }, // Middle feedback (Highlighted)
  { id: 3, name: "Mike Smith", message: "Exceptional products! The quality exceeded my expectations, and everything was exactly as described. I'll definitely be back for more." },
];

export default function FeedbackCorner() {
  const [activeIndex, setActiveIndex] = useState(1); // Default active index (middle)

  return (
    <div className="max-w-6xl mx-auto pb-12 px-4 text-center justify-center items-center">
      <h2 className="text-3xl md:text-[40px] font-fell text-[#2C5530] mb-8 font-extralight">
        Feedback Corner
      </h2>

      {/* Feedback Slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        loopedSlides={feedbacks.length} // Fixes looping issue
        initialSlide={1} // Start with the middle box
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={feedback.id}>
            <div
              className={`w-[339px] h-[277px] p-6 rounded-3xl text-center transition-all duration-300 flex flex-col justify-center ${
                activeIndex === index
                  ? "bg-[#ADD776] scale-105 shadow-2xl"
                  : "bg-[#ADD776] opacity-30 shadow-lg"
              }`}
            >
              <p className="text-[35px] text-left font-semibold">“</p>
              <p className="text-[25px] text-left font-semibold">{feedback.name}</p>
              <p className="text-[12px] text-left font-semibold">"{feedback.message}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows Below */}
      <div className="flex justify-center gap-16 mt-6">
        <button className="prev-btn group flex items-center justify-center w-[50px] h-[50px] bg-[#B8E986] rounded-md shadow-md transition-all duration-200 hover:bg-[#A3D873]">
          <img src="/images/left-arrow.svg" alt="Previous" />
        </button>

        <button className="next-btn group flex items-center justify-center w-[50px] h-[50px] bg-[#B8E986] rounded-md shadow-md transition-all duration-200 hover:bg-[#A3D873]">
          <img src="/images/arrow.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
}
