import React, { useState } from 'react';

const Orders = () => {
  // Sample order data based on the image
  const [orders, setOrders] = useState([
    { 
      id: '#01293817', 
      customer: 'Disha Takawale', 
      purchaseDate: '21 February 2025', 
      amount: 699, 
      status: 'Received' 
    },
    { 
      id: '#01563817', 
      customer: 'Prerna Patankar', 
      purchaseDate: '11 February 2025', 
      amount: 999, 
      status: 'Cancelled' 
    },
    { 
      id: '#07793817', 
      customer: 'Saloni Patil', 
      purchaseDate: '11 December 2024', 
      amount: 599, 
      status: 'Pending' 
    },
    { 
      id: '#07793317', 
      customer: 'Heena Kausar', 
      purchaseDate: '9 November 2024', 
      amount: 299, 
      status: 'Received' 
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // As shown in the pagination

  // Get status color based on the status text
  const getStatusColor = (status) => {
    switch(status) {
      case 'Received':
        return 'text-green-500';
      case 'Cancelled':
        return 'text-red-500';
      case 'Pending':
        return 'text-orange-400';
      default:
        return 'text-gray-500';
    }
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-6xl mx-auto mt-[100px] p-4">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Orders</h1>
      
      {/* Orders table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-4 px-4 text-left font-medium">Order ID</th>
              <th className="py-4 px-4 text-left font-medium">Customers</th>
              <th className="py-4 px-4 text-left font-medium">Purchase Date</th>
              <th className="py-4 px-4 text-left font-medium">Amount</th>
              <th className="py-4 px-4 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-4 px-4">{order.id}</td>
                <td className="py-4 px-4">{order.customer}</td>
                <td className="py-4 px-4">{order.purchaseDate}</td>
                <td className="py-4 px-4">{order.amount}</td>
                <td className={`py-4 px-4 ${getStatusColor(order.status)}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>
      
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button 
          className="flex items-center"
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>
        
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                currentPage === i + 1 ? 'bg-gray-200' : ''
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        
        <button 
          className="flex items-center"
          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Orders;