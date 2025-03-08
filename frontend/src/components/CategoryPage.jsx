"use client"

import { useState, useEffect } from "react"
import { Heart, ShoppingCart, ChevronRight, Instagram, Facebook, Share2 } from "lucide-react"
import { productsData } from "../data/products" // Import products data

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("Fashion & Accessories")
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Load products when category changes
  useEffect(() => {
    // Get products for the selected category
    const categoryProducts = productsData[selectedCategory] || []
    setProducts(categoryProducts)

    // Set first product as selected or reset if empty
    if (categoryProducts.length > 0) {
      setSelectedProduct(categoryProducts[0])
    } else {
      setSelectedProduct(null)
    }
  }, [selectedCategory])

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  // Function to handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product)
    setQuantity(1) // Reset quantity when product changes
  }

  return (
    <div className="w-full font-['Inter'] text-gray-800">
      {/* Line below navbar */}
      <div className="w-full border-b-2 border-gray-400"></div>

      {/* Categories Menu */}
      <div className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between">
            {[
              "Handmade Specials",
              "Occasions",
              "Fashion & Accessories",
              "Small Business Specials",
              "Customizables",
            ].map((category) => (
              <div
                key={category}
                className={`font-bold text-base py-4 px-3 cursor-pointer transition-all hover:text-green-800 relative ${
                  selectedCategory === category 
                    ? "text-green-800" 
                    : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                {selectedCategory === category && (
                  <div className="absolute bottom-0 left-0 w-full h-px bg-green-800"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center py-4 text-sm">
          <span>{selectedCategory}</span>
          {selectedProduct && (
            <>
              <ChevronRight size={16} className="mx-1" />
              <span className="font-bold">{selectedProduct.name}</span>
            </>
          )}
        </div>

        {selectedProduct ? (
          // Detailed Product View
          <div className="flex flex-col md:flex-row mt-8 mb-12">
            <div className="w-full md:w-1/2 flex">
              <div className="w-1/6 space-y-2">
                {/* Thumbnail Images */}
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-200 h-16 w-16 cursor-pointer"></div>
                ))}
              </div>
              <div className="w-5/6 pl-4">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-auto" />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
              <div className="flex items-center">
                <h1 className="text-3xl font-bold mr-6">{selectedProduct.name}</h1>
                <div className="flex items-center mr-6">
                  <span className="text-lg font-medium mr-2">5.0</span>
                  <span className="text-yellow-500">★</span>
                </div>
                <button className="border rounded-full p-2 hover:bg-gray-100">
                  <Heart size={24} />
                </button>
              </div>

              <div className="mt-4">
                <h2 className="text-3xl font-semibold">₹{selectedProduct.price}</h2>
              </div>

              <div className="mt-4">
                <p>
                  Availability: <span className="font-medium">{selectedProduct.stock} in Stock</span>
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center mt-4">
                <button onClick={decrementQuantity} className="bg-gray-200 hover:bg-gray-300 py-2 px-4 text-lg">
                  -
                </button>
                <div className="py-2 px-6 border-t border-b border-gray-200 text-center">{quantity}</div>
                <button onClick={incrementQuantity} className="bg-gray-200 hover:bg-gray-300 py-2 px-4 text-lg">
                  +
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-6">
                <button className="flex items-center justify-center bg-lime-200 hover:bg-lime-300 text-gray-800 py-3 px-6 rounded-md">
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button>
                <button className="flex items-center justify-center bg-green-800 hover:bg-green-900 text-white py-3 px-6 rounded-md">
                  Buy Now
                  <ChevronRight size={20} className="ml-2" />
                </button>
              </div>

              {/* View More Details */}
              <button className="flex items-center text-blue-500 mt-6">
                <span className="mr-2">View More Details</span>
                <ChevronRight size={16} />
              </button>

              {/* Share Section */}
              <div className="mt-6 flex items-center">
                <span className="text-sm mr-2">SHARE ON:</span>
                <div className="flex space-x-2">
                  <Instagram size={20} className="cursor-pointer" />
                  <Facebook size={20} className="cursor-pointer" />
                  <Share2 size={20} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // No product selected view
          <div className="py-8 text-center">
            <p>No products available in this category.</p>
          </div>
        )}

        {/* Product Grid */}
        <div className="mt-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Products in {selectedCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleProductSelect(product)}
              >
                <div className="h-48 bg-gray-100 w-full">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-lg font-semibold mt-2">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage