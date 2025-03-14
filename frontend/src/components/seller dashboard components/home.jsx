import React from 'react'

function Home() {
    const stats = [
        { title: "New Orders", count: "1523", icon: "📦" },
        { title: "Customers", count: "2310", icon: "👥" },
        { title: "Messages", count: "50", icon: "💬" },
      ];
    
      const recentOrders = [
        { id: "#01293817", customer: "Disha Takawale", date: "21 February 2025", amount: "699", status: "Received" },
        { id: "#01563817", customer: "Prerna Patankar", date: "11 February 2025", amount: "999", status: "Cancelled" },
        { id: "#07793817", customer: "Saloni Patil", date: "11 December 2024", amount: "599", status: "Pending" },
        { id: "#07793317", customer: "Heena Kausar", date: "9 November 2024", amount: "299", status: "Received" },
      ];
    
      const getStatusColor = (status) => {
        switch (status) {
          case "Received":
            return "text-green-500";
          case "Cancelled":
            return "text-red-500";
          case "Pending":
            return "text-amber-500";
          default:
            return "text-gray-700";
        }
      };
  return (
    <main className="flex-1 p-8">
        {/* Welcome Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome Neha Maniyar!</h1>
          <p className="text-gray-500 mt-2">Excited to have you onboard.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-700">{stat.title}</h3>
                <p className="text-xl font-semibold text-amber-500 mt-1">{stat.count}</p>
              </div>
              <div className="bg-amber-50 w-10 h-10 rounded-full flex items-center justify-center text-amber-500 text-xl">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="text-xl font-semibold p-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-y border-gray-200">
                <tr>
                  <th className="py-4 px-6 text-gray-600 font-medium">Order ID</th>
                  <th className="py-4 px-6 text-gray-600 font-medium">Customers</th>
                  <th className="py-4 px-6 text-gray-600 font-medium">Purchase Date</th>
                  <th className="py-4 px-6 text-gray-600 font-medium">Amount</th>
                  <th className="py-4 px-6 text-gray-600 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentOrders.map((order, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 text-gray-800">{order.id}</td>
                    <td className="py-4 px-6 text-gray-800">{order.customer}</td>
                    <td className="py-4 px-6 text-gray-800">{order.date}</td>
                    <td className="py-4 px-6 text-gray-800">{order.amount}</td>
                    <td className="py-4 px-6">
                      <span className={`font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
  )
}

export default Home