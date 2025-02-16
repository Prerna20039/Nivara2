"use client";

import ProductCard from "./customcards"; // Import ProductCard Component

const customizableProducts = [
  { id: 1, name: "Resin Keychains", price: "Rs 999", image: "/images/image 6.svg" },
  { id: 2, name: "Photo Collage Pillow", price: "Rs 599", image: "/images/image 7.svg" },
  { id: 3, name: "Customized Photo Painting", price: "Rs 169 ", image: "/images/image 8.svg" },
];

export default function CustomizableSection() {
  return (
    <div className="max-w-[80%] mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-fell font-extralight text-[#4D6E3D] mb-8 text-center">
        Customizables
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {customizableProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            name={product.name} 
            price={product.price} 
            image={product.image} 
          />
        ))}
      </div>
      <div className="w-[224px] h-[65px] border-2 rounded-3xl text-[#2C4F1D] p-4 text-[25px] border-[#2C4F1D] flex items-center justify-center gap-2 mx-auto my-20">
          See More
          <img src="/images/right_arrow.svg" className="w-6 h-6" alt="Arrow" />
        </div>
    </div>
  );
}
