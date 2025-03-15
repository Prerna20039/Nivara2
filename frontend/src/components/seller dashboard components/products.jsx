"use client"

import { useState } from "react"
import AddProductPopup from "./AddProductPopup"

const Products = () => {
  const [showAddPopup, setShowAddPopup] = useState(false)
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/avocado-crochet.jpg",
      name: "Avocado Crochet",
      status: "active",
      category: "Birthday Gifts",
      amount: 599,
    },
    {
      id: 2,
      image: "/bangtan-bracelets.jpg",
      name: "Bangtan Bracelets",
      status: "inactive",
      category: "Jewelry",
      amount: 299,
    },
    {
      id: 3,
      image: "/palette-necklace1.jpg",
      name: "Palette Necklace",
      status: "active",
      category: "Jewelry",
      amount: 499,
    },
    {
      id: 4,
      image: "/palette-necklace2.jpg",
      name: "Palette Necklace",
      status: "inactive",
      category: "Jewelry",
      amount: 499,
    },
    {
      id: 5,
      image: "/palette-necklace3.jpg",
      name: "Palette Necklace",
      status: "active",
      category: "Jewelry",
      amount: 499,
    },
  ])

  const [selectedProducts, setSelectedProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [editingProduct, setEditingProduct] = useState(null)
  const itemsPerPage = 3 // Limit per page
  const totalPages = Math.ceil(products.length / itemsPerPage)

  // Paginated Products
  const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle checkbox selection
  const handleSelection = (id) => {
    setSelectedProducts((prev) => (prev.includes(id) ? prev.filter((productId) => productId !== id) : [...prev, id]))
  }

  // Handle bulk selection
  const handleBulkSelection = (e) => {
    setSelectedProducts(e.target.checked ? displayedProducts.map((p) => p.id) : [])
  }

  // Handle delete action for multiple products
  const handleBulkDelete = () => {
    setProducts((prev) => prev.filter((p) => !selectedProducts.includes(p.id)))
    setSelectedProducts([])
  }

  // Handle delete action for a single product
  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
    setSelectedProducts((prev) => prev.filter((productId) => productId !== id))
  }

  // Handle edit action
  const handleEdit = (product) => {
    setEditingProduct(product)
    setShowAddPopup(true)
  }

  // Handle form submission (add or update)
  const handleSubmit = (formData) => {
    if (editingProduct) {
      // Update existing product
      setProducts((prev) => prev.map((p) => (p.id === formData.id ? formData : p)))
    } else {
      // Add new product with a new ID
      const newId = Math.max(...products.map((p) => p.id), 0) + 1
      setProducts((prev) => [...prev, { ...formData, id: newId }])
    }
    // Reset editing state
    setEditingProduct(null)
  }

  // Close popup and reset editing state
  const handleClosePopup = () => {
    setShowAddPopup(false)
    setEditingProduct(null)
  }

  return (
    <div className="max-w-6xl mx-auto mt-[50px] p-4">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-4">My Products</h1>

      {/* Action buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {
            setEditingProduct(null)
            setShowAddPopup(true)
          }}
          className="px-3 py-1 border border-green-500 text-green-500 rounded flex items-center"
        >
          <span className="mr-1">+</span> Add
        </button>
        <button
          onClick={handleBulkDelete}
          disabled={selectedProducts.length === 0}
          className={`px-3 py-1 ${selectedProducts.length > 0 ? "bg-red-500" : "bg-gray-300"} text-white rounded flex items-center`}
        >
          <span className="mr-1">🗑</span> Delete
        </button>
      </div>

      {/* Products table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">
                <input
                  type="checkbox"
                  onChange={handleBulkSelection}
                  checked={selectedProducts.length === displayedProducts.length && displayedProducts.length > 0}
                />
              </th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product) => (
              <tr key={product.id} className="border-b bg-gray-50 hover:bg-gray-100">
                <td className="py-2 px-4">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleSelection(product.id)}
                  />
                </td>
                <td className="py-2 px-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">
                  <div
                    className={`w-3 h-3 rounded-full ${product.status === "active" ? "bg-green-500" : "bg-red-500"}`}
                  ></div>
                </td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">${(product.amount / 100).toFixed(2)}</td>
                <td className="py-2 px-4 flex gap-2">
                  <button className="text-gray-500" onClick={() => handleEdit(product)}>
                    ✏️
                  </button>
                  <button className="text-red-500" onClick={() => handleDelete(product.id)}>
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 text-gray-700"
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`w-8 h-8 flex items-center justify-center rounded ${currentPage === i + 1 ? "bg-gray-200" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-gray-700"
        >
          Next →
        </button>
      </div>

      {/* Add/Edit Product Popup */}
      <AddProductPopup
        isOpen={showAddPopup}
        onClose={handleClosePopup}
        onSubmit={handleSubmit}
        editProduct={editingProduct}
      />
    </div>
  )
}

export default Products

