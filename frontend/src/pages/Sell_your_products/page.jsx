import React from "react"
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function AccountSettings() {
  const navigate = useNavigate();
  return (
    
    <div className="flex flex-col min-h-screen">
        
        
      {/* Hero Section */}
      <section className="bg-[#f0f5f0] py-16 ">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">We are excited to promote your</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Small Business at</h2>
            <p className="text-3xl font-bold text-amber-500 mb-8">0% listing cost</p>
            <button  onClick={() => navigate("/create_account")} className="bg-[#2c5d1e] hover:bg-[#224718] text-white font-medium py-2 px-8 rounded-full">
              Start Selling
            </button>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How it works</h2>

          <div className="bg-[#f5f8f5] rounded-lg p-6">
            {/* Steps with connecting lines */}
            <div className="flex justify-between items-center mb-8 px-4">
              {[1, 2, 3, 4, 5].map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#2c5d1e] text-white flex items-center justify-center text-xl font-bold">
                      {step}
                    </div>
                  </div>
                  {index < 4 && <div className="h-[2px] bg-gray-300 flex-grow mx-2"></div>}
                </React.Fragment>
              ))}
            </div>

            {/* Step details */}
            <div className="grid grid-cols-5 gap-4 text-center">
              <div className="flex flex-col">
                <h3 className="font-semibold mb-2">Registration & Onboarding</h3>
                <ul className="text-xs text-left space-y-1">
                  <li>-Sign up as a seller</li>
                  <li>-Verification</li>
                  <li>-Store Setup</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold mb-2">Product Listing & Management</h3>
                <ul className="text-xs text-left space-y-1">
                  <li>-Upload Products</li>
                  <li>-Set Inventory & Pricing</li>
                  <li>-Approvals & Go Live</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold mb-2">Orders & Fulfillment</h3>
                <ul className="text-xs text-left space-y-1">
                  <li>-Receive Orders</li>
                  <li>-Pack & Ship</li>
                  <li>-Track & Deliver</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold mb-2">Payments & Earnings</h3>
                <ul className="text-xs text-left space-y-1">
                  <li>-Payment Processing</li>
                  <li>-Earnings Dashboard</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold mb-2">Growth & Support</h3>
                <ul className="text-xs text-left space-y-1">
                  <li>-Get Promotions & Ads</li>
                  <li>-Customer Feedback & Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-[#f0f5f0] py-12 px-6 mt-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-gray-800">
                Nivara
                <br />
                Supplier
                <br />
                Support
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="mb-6">
                Nivara supplier support is available to solve all your doubts and issues before and after you start your
                online selling business.
              </p>
              <div className="flex items-center bg-[#2c5d1e] text-white p-3 rounded-md inline-block">
                <div className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm">You can reach out to</p>
                  <p className="font-medium">nivara25@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

