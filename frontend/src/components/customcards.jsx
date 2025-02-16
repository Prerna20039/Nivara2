import { FaEdit } from "react-icons/fa";

export default function ProductCard({ name, price, image }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Outer Div with Image & Edit Icon */}
      <div className="relative w-[284px]  h-[371px] p-6  rounded-lg overflow-hidden bg-[#ffffff] shadow-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover pt-8"
        />
        {/* Edit Icon */}
        <div className="absolute top-2 right-2 cursor-pointer">
            <img src="/images/editbutton.svg" className=""></img>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-lg font-medium font-inder">{name}</h3>
        <p className="text-gray-600">
          {price} | <span className="text-yellow-500">⭐ 5.0</span>
        </p>
      </div>
    </div>
  );
}
