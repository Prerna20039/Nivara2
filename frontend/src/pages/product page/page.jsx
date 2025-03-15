import React, { useState } from 'react';
import SidebarNav from '../../components/category_sidenav';
import ProductCard from '../../components/product_card';

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  
  // Sample product data
  const products = Array(9).fill().map((_, index) => ({
    id: index + 1,
    name: "Gift Hamper",
    price: "₹999",
    rating: 5.0,
    image: "/api/placeholder/200/200",
    isFavorite: false
  }));

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleFavorite = (productId) => {
    // In a real application, you would update the state to toggle the favorite status
    console.log(`Toggled favorite for product ${productId}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-64 border-r border-blue-300">
        <SidebarNav />
      </div>

      {/* Main Content - Product Grid */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onToggleFavorite={toggleFavorite} 
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between border-t pt-4">
          <button 
            onClick={handlePrevious}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous
          </button>
          
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;