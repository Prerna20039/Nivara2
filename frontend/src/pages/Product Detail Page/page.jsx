"use client"

import { useState } from "react"
import { Star, Heart, Share, ChevronRight } from "lucide-react"

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Top Section - Product Image and Details */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="flex">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2 mr-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-14 h-14 bg-gray-100 mb-2"></div>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cgAPpiLXAY5BNItsWVEaxY5A3tmIxw.png"
                alt="Flower Resin Chain"
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-medium">Flower Resin Chain</h1>
              <div className="flex items-center mt-1">
                <span className="text-sm mr-1">5.0</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <button className="p-1">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4">
            <p className="text-xl font-bold">₹699</p>
            <p className="text-sm text-gray-600 mt-1">Availability: 10 in Stock</p>
          </div>

          <div className="flex items-center mt-4">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-1 text-lg" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button className="px-3 py-1 text-lg" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="flex-1 bg-green-100 text-green-800 py-2 px-4 rounded-md flex items-center justify-center">
              <span>Add to Cart</span>
            </button>
            <button className="flex-1 bg-green-800 text-white py-2 px-4 rounded-md flex items-center justify-center">
              <span>Buy Now</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <button className="flex items-center text-blue-500 mt-4" onClick={() => setShowDetails(!showDetails)}>
            <span>View More Details</span>
          </button>
        </div>
      </div>

      {showDetails && (
        <div>
          {/* Bottom Section - Reviews and Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Customer Reviews - Left Side */}
            <div>
              <h2 className="text-lg font-medium border-b pb-2">Customer Reviews</h2>
              <div className="mt-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-xs">
                    SS
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Shruti S</span>
                      <div className="flex items-center bg-green-100 text-green-800 text-xs px-1 rounded">
                        <Star className="w-3 h-3 fill-green-800" />
                        <span>5.0</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Posted on 21 Feb 2023</p>
                    <p className="text-sm mt-1">
                      Beautiful and Unique! Love the clear resin finish! The craftsmanship is impressive, and the preserved
                      flowers look amazing encased in the clear resin. I've received so many compliments when wearing it.
                      I'm so happy to have ordered such a lovely accessory!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details - Right Side */}
            <div>
              <h2 className="text-lg font-medium border-b pb-2">Product Details</h2>
              <div className="mt-4">
                <p className="text-sm font-medium">Description:</p>
                <p className="text-sm mt-1">
                  Add a touch of nature to your jewelry collection with this beautiful handmade resin flower chain necklace.
                  Encased in clear resin, delicate flowers are preserved forever, creating a stunning and unique piece that
                  will enhance any outfit.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-8 border-t pt-4">
        <h3 className="text-lg font-medium">Get in touch with your Seller :)</h3>
        <div className="flex items-center gap-4 mt-4 bg-gray-50 p-4 rounded-lg">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <span className="text-pink-500">🌸</span>
          </div>
          <div className="flex-1">
            <h4 className="font-medium">Floral Whispers</h4>
            <p className="text-sm text-gray-600">
              Floral Whispers offers exquisite handcrafted resin jewelry featuring preserved flowers, capturing nature's
              beauty in timeless elegance.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm">View Shop</button>
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm flex items-center">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
