"use client"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { handleError } from "../utilities"

export function LoginPopup({ isOpen, onClose, onSwitchToSignup }) {
  const [showPassword, setShowPassword] = useState(false)
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  })

  
  console.log("loginInfo-> ",loginInfo);

    const handleChange = (e) => {
      const { name, value } = e.target;
      const copyLoginInfo = { ...loginInfo };
      copyLoginInfo[name] = value;
      setLoginInfo(copyLoginInfo);
    }
    const handleLogin = async (e) =>
    {
      e.preventDefault();
      const {email,password} = loginInfo;
      if(!email || !password)
      {
        return alert("Please Fill All Fields");
      }
      try{
        const url = "http://localhost:5000/auth/login";
        const response = await fetch(url,{
          method : "POST",
          headers : {
            'Content-Type' : 'application/json'
  
          },
          body: JSON.stringify(loginInfo)
        });
        const result = await response.json();
        const {success,message,jwtToken,name,error} = result;
        if(success)
        {
          localStorage.setItem('token',jwtToken);
          localStorage.setItem('User',name);
          alert("Login Successful");
          onClose()
          
        }
        console.log(result);
      }
      catch(err){
        handleError(err);

      }
  
    }
  

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#F0F4E3] p-8 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button className="absolute top-2 right-3 text-xl text-gray-600 hover:text-red-500" onClick={onClose}>
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-[#5D8441] mb-4">Welcome Back 👋</h2>

        {/* Form */}
        <form onSubmit={handleLogin} autoComplete="off">
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

          {/* Forgot Password */}
          <p className="text-xs text-[#5D8441] text-right mb-2 cursor-pointer">Forgot your password?</p>

          {/* Submit Button */}
          <button className="w-full bg-[#A7B65D] text-white py-2 rounded-md hover:bg-[#8C9E4B]">Login</button>

          {/* OR Login with Google */}
          

          {/* Terms & Conditions */}
          <p className="text-xs text-center text-gray-500 mt-2">
            By logging in, you agree to Nivara's
            <span className="text-[#5D8441] cursor-pointer"> Terms of Service</span> and
            <span className="text-[#5D8441] cursor-pointer"> Privacy Policy</span>.
          </p>

          {/* Toggle to Signup */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don't have an account?
            <span className="text-[#5D8441] cursor-pointer font-medium ml-1" onClick={onSwitchToSignup}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

