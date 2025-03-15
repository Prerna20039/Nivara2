"use client"

import { useState, useEffect } from "react"
import { Upload, X } from "lucide-react"

const AddProductPopup = ({ isOpen, onClose, onSubmit, editProduct }) => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    photos: [],
  })

  const [dragActive, setDragActive] = useState(false)

  useEffect(() => {
    if (editProduct) {
      setFormData({
        category: editProduct.category || "",
        name: editProduct.name || "",
        description: editProduct.description || "",
        price: editProduct.price ? editProduct.price.toString() : "",
        stock: editProduct.stock ? editProduct.stock.toString() : "",
        photos: editProduct.photos || [],
      })
    } else {
      setFormData({
        category: "",
        name: "",
        description: "",
        price: "",
        stock: "",
        photos: [],
      })
    }
  }, [editProduct, isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(e.type === "dragenter" || e.type === "dragover")
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFiles = (files) => {
    if (formData.photos.length + files.length > 3) {
      alert("You can only upload up to 3 photos")
      return
    }

    const newFiles = Array.from(files).map((file) => URL.createObjectURL(file))
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...newFiles].slice(0, 3),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    onClose()
  }

  // Close popup when clicking outside the modal
  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      onClose()
    }
  }

  if (!isOpen) return null

  const categories = ["Birthday Gifts", "Jewelry", "Home Decor", "Accessories", "Art"]

  return (
    <div
      id="modal-background"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
      aria-hidden={!isOpen}
    >
      <div className="bg-white rounded-lg p-8 w-full max-w-xl max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">{editProduct ? "Edit Product" : "Add a Product"}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select a Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="relative">
            <textarea
              name="description"
              placeholder="Product Description"
              value={formData.description}
              onChange={handleChange}
              maxLength={500}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <span className="absolute bottom-2 right-2 text-sm text-gray-500">{formData.description.length}/500</span>
          </div>

          <div>
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div
            className={`border-2 border-dashed rounded-md p-6 ${
              dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Drag & Drop or</p>
              <label className="mt-2 cursor-pointer">
                <span className="text-blue-500 hover:text-blue-600">+ Add up to 3 photos</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </label>
            </div>

            {formData.photos.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {formData.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo || "/placeholder.svg"}
                    alt={`Product preview ${index + 1}`}
                    className="h-24 w-24 object-cover rounded-md"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
            >
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProductPopup
