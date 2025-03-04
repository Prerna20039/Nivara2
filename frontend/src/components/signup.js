"use client"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

export function SignupPopup({ isOpen, onClose, onSwitchToLogin }) {
  const [showPassword, setShowPassword] = useState(false)
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  }
  console.log("signinInfo-> ",signupInfo);


  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#F0F4E3] p-8 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button className="absolute top-2 right-3 text-xl text-gray-600 hover:text-red-500" onClick={onClose}>
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-[#5D8441] mb-4">Create Your Account</h2>

        {/* Form */}
        <form autoComplete="off">
          {/* Email */}
          <div className="mb-3">
            <label className="text-sm font-medium text-gray-700">Email Address*</label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* First Name */}
          <div className="mb-3">
            <label className="text-sm font-medium text-gray-700">First Name*</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="text-sm font-medium text-gray-700">Password*</label>
            <input
              name="password"
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <span
              className="absolute top-10 right-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#A7B65D] text-white py-2 rounded-md hover:bg-[#8C9E4B]">Create Account</button>

          {/* OR Signup with Google */}
          <div className="text-center mt-3 text-sm">
            <p>or signup with</p>
            <button className="mt-2 bg-white border border-gray-300 p-2 rounded-md shadow-md flex items-center justify-center w-full">
              <img src="/images/google.png" alt="Google" className="w-8 h-5 mr-2" />
              Continue with Google
            </button>
          </div>

          {/* Terms & Conditions */}
          <p className="text-xs text-center text-gray-500 mt-2">
            By creating an account, you agree to Nivara's
            <span className="text-[#5D8441] cursor-pointer"> Terms of Service</span> and
            <span className="text-[#5D8441] cursor-pointer"> Privacy Policy</span>.
          </p>

          {/* Toggle to Login */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            Already have an account?
            <span className="text-[#5D8441] cursor-pointer font-medium ml-1" onClick={onSwitchToLogin}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

