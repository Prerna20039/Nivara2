import React from 'react';

const ProductCard = ({ product, onToggleFavorite }) => {
  return (
    <div className="bg-white p-4 rounded shadow-sm relative">
      <button 
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
        onClick={() => onToggleFavorite(product.id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
      <div className="mb-2">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      </div>
      <div className="text-center">
        <h3 className="text-sm text-gray-600">{product.name}</h3>
        <p className="font-semibold">{product.price}</p>
        <div className="flex items-center justify-center">
          <span className="text-sm mr-1">{product.rating}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="gold" stroke="gold" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;