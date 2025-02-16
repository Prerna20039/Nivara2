import { Heart, Star } from "lucide-react";

export default function ProductCard({ title, price, rating = 0, image, isNew = false })   {
  return (
    <div className="relative w-[284px]  h-[371px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      {/* New Tag */}
      {isNew && (
        <span className="absolute top-4 left-4 bg-[#E3FCBF] text-[#4B6F44] px-3 py-1 rounded-full text-sm font-medium z-10">
          New
        </span>
      )}

      {/* Like Button */}
      <button
        className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-black/5 transition-colors"
        aria-label="Add to favorites"
      >
        <Heart className="w-5 h-5" />
      </button>

      {/* Product Image */}
      <div className="mx-auto w-[263px] h-[287px] relative aspect-[4/3] overflow-hidden bg-[#FFFFFF]">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full pt-14 px-2 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-medium text-gray-900 ">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-semibold">₹</span>
            <span className="text-lg font-semibold">{price}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg font-medium">{rating.toFixed(1)}</span>
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
