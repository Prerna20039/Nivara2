import React, { useState } from 'react';

const AddProductPopup = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    category: '',
    productName: '',
    productDescription: '',
    productFeature: '',
    productPrice: '',
    stock: '',
    photos: []
  });

  const [descriptionLength, setDescriptionLength] = useState(0);
  const [featureLength, setFeatureLength] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'productDescription') {
      setDescriptionLength(value.length);
    } else if (name === 'productFeature') {
      setFeatureLength(value.length);
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && formData.photos.length < 3) {
      const newPhotos = [...formData.photos];
      for (let i = 0; i < e.target.files.length; i++) {
        if (newPhotos.length < 3) {
          newPhotos.push(e.target.files[i]);
        }
      }
      setFormData({
        ...formData,
        photos: newPhotos
      });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && formData.photos.length < 3) {
      const newPhotos = [...formData.photos];
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        if (newPhotos.length < 3) {
          newPhotos.push(e.dataTransfer.files[i]);
        }
      }
      setFormData({
        ...formData,
        photos: newPhotos
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 p-6 relative">
        <h2 className="text-2xl font-medium text-center mb-6">Add a Product</h2>
        
        {/* User Avatar - Top Right */}
        <div className="absolute top-6 right-6">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img src="/api/placeholder/40/40" alt="User avatar" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Category Dropdown */}
          <div className="mb-4">
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>Select a Category</option>
              <option value="jewelry">Jewelry</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="handmade">Handmade</option>
              <option value="birthday">Birthday Gifts</option>
            </select>
          </div>
          
          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          {/* Product Description */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Product Description</label>
            <div className="relative">
              <textarea
                name="productDescription"
                value={formData.productDescription}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                maxLength="500"
                required
              ></textarea>
              <div className="absolute bottom-2 right-3 text-xs text-gray-500">
                {descriptionLength}/500
              </div>
            </div>
          </div>
          
          {/* Product Feature */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Product Feature</label>
            <div className="relative">
              <textarea
                name="productFeature"
                value={formData.productFeature}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="3"
                maxLength="250"
              ></textarea>
              <div className="absolute bottom-2 right-3 text-xs text-gray-500">
                {featureLength}/250
              </div>
            </div>
          </div>
          
          {/* Product Price */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Product Price</label>
            <input
              type="number"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          {/* Stock */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          {/* Photos Upload */}
          <div className="mb-6">
            <label className="block text-gray-600 text-sm mb-1">Photos</label>
            <div 
              className="border border-gray-300 border-dashed rounded-lg p-6 text-center"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <p className="text-gray-500 mb-2">Drag & Drop or</p>
              <label className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full cursor-pointer inline-block">
                + Add up to 3 photos
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              
              {formData.photos.length > 0 && (
                <div className="mt-4 flex gap-2 justify-center">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="w-16 h-16 relative">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`Product photo ${index + 1}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-900 text-white font-medium px-8 py-2 rounded-full"
            >
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPopup;