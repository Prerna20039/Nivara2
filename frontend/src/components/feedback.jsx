"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const feedbacks = [
  { id: 1, name: "John Doe", message: "Amazing products! Loved the customization." },
  { id: 2, name: "Sarah Lee", message: "Great experience! I highly recommend this store." }, // Highlighted
  { id: 3, name: "Mike Smith", message: "The quality is just outstanding!" },
];

export default function FeedbackCorner() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-fell text-[#2C5530] mb-8 font-extralight">Feedback Corner</h2>

      {/* Feedback Slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={feedback.id}>
            <div
              className={`w-[339px] h-[277px] p-6  rounded-3xl text-center transition-all duration-300 flex flex-col justify-center ${
                activeIndex === index
                  ? "bg-[#ADD776] scale-105 shadow-2xl"
                  : "bg-[#ADD776] opacity-30 shadow-lg"
              }`}
            >
              <p className="text-lg font-semibold">"{feedback.message}"</p>
              <span className="block mt-4 text-[#2C5530] font-fell">{feedback.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows Below */}
      <div className="flex justify-center gap-10 mt-6">
        <button className="prev-btn group flex items-center gap-2 text-[#2C5530] text-lg font-semibold transition-all duration-200">
          <span className="group-hover:-translate-x-2 transition-transform duration-200">←</span> 
          Prev
        </button>

        <button className="next-btn group flex items-center gap-2 text-[#2C5530] text-lg font-semibold transition-all duration-200">
          Next 
          <span className="group-hover:translate-x-2 transition-transform duration-200">→</span>
        </button>
      </div>
    </div>
  );
}
