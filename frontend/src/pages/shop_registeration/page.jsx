"use client";

import { useState } from "react";
import Navbar_without_logo from "../../components/navbar_without_logo";

export default function CreateShop() {
  const [shopName, setShopName] = useState("");
  const [shopDescription, setShopDescription] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  
  // Location details
  const [address, setAddress] = useState("");
  const [state, setState] = useState("Maharashtra");
  const [pincode, setPincode] = useState("");
  
  // Bank details
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  const steps = [
    { id: 1, name: "Shop Details", icon: "🏷️" },
    { id: 2, name: "Location", icon: "📍" },
    { id: 3, name: "Bank Details", icon: "💳" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      window.location.href = '/seller_dashboard';
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <Navbar_without_logo />
      <div className="max-w-2xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {/* Connection lines - rendered first so they appear behind circles */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
            
            {/* Completed lines */}
            <div 
              className="absolute top-5 left-0 h-0.5 bg-emerald-500 z-0 transition-all duration-500"
              style={{ width: `${(currentStep - 1) / (steps.length - 1) * 100}%` }}
            ></div>
            
            {/* Steps with icons */}
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center relative z-10">
                {/* Circle with icon */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    step.id < currentStep 
                      ? "bg-emerald-500 border-emerald-500 text-white" 
                      : step.id === currentStep
                        ? "bg-white border-emerald-500 text-emerald-500" 
                        : "bg-white border-gray-300 text-gray-400"
                  }`}
                >
                  {step.id < currentStep ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span>{step.icon}</span>
                  )}
                </div>
                
                {/* Step name */}
                <span 
                  className={`mt-2 text-sm ${
                    step.id < currentStep 
                      ? "text-emerald-600 font-medium" 
                      : step.id === currentStep
                        ? "text-emerald-500 font-medium" 
                        : "text-gray-500"
                  }`}
                >
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <div className="max-w-xl mx-auto">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
              {currentStep === 1 && "Shop Details"}
              {currentStep === 2 && "Location Details"}
              {currentStep === 3 && "Bank Details"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <>
                  <div>
                    <label htmlFor="shopName" className="block text-sm font-medium text-gray-700 mb-1">
                      Shop Name
                    </label>
                    <input
                      type="text"
                      id="shopName"
                      name="shopName"
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                      placeholder="Enter your shop name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="shopDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Shop Description
                    </label>
                    <textarea
                      id="shopDescription"
                      name="shopDescription"
                      rows={4}
                      value={shopDescription}
                      onChange={(e) => setShopDescription(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                      placeholder="Describe your shop..."
                    />
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-500 mb-1">
                      Enter your Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                      placeholder="Enter your address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-500 mb-1">
                      Select your State
                    </label>
                    <div className="relative">
                      <select
                        id="state"
                        name="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                      >
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Gujarat">Gujarat</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-500 mb-1">
                      Enter your Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                      placeholder="Enter your pincode"
                    />
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div>
                    <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-500 mb-1">
                      Account Holder name
                    </label>
                    <input
                      type="text"
                      id="accountHolder"
                      name="accountHolder"
                      value={accountHolder}
                      onChange={(e) => setAccountHolder(e.target.value)}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-500 mb-1">
                      Account Number
                    </label>
                    <input
                      type="text"
                      id="accountNumber"
                      name="accountNumber"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-500 mb-1">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-500 mb-1">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      id="ifscCode"
                      name="ifscCode"
                      value={ifscCode}
                      onChange={(e) => setIfscCode(e.target.value)}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                    />
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="pt-6 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150"
                  >
                    Previous
                  </button>
                )}

                <button
                  type="submit"
                  className={`px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 transition duration-150 ${currentStep === 1 ? "ml-auto" : "w-89"}`}
                >
                  Save and Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}