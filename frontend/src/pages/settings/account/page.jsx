"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import SettingsNav from "../../../components/settings_nav"

const AccountSetting = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
    closeAccount: false,
  })

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    newEmail: "",
    confirmEmail: "",
    emailPassword: "",
    closeReason: "",
    closePassword: "",
    additionalFeedback: "",
  })

  const handlePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div>
      <SettingsNav />
      <div className="max-w-4xl mx-auto p-6 autofill:hidden">
        <div className="space-y-6">
          {/* About You Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">About You</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Name</p>
                <p className="font-medium">Robert</p>
                <p className="text-sm text-gray-500 mt-2">Member since</p>
                <p className="text-sm">15 February, 2023</p>
              </div>
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Password Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm autofill:hidden">
            <h2 className="text-xl font-semibold mb-4">Password</h2>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword.current ? "text" : "password"}
                  name="currentPassword"
                  placeholder="Current Password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => handlePasswordVisibility("current")}
                  className="absolute right-2 top-2.5 text-gray-500"
                >
                  {showPassword.current ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showPassword.new ? "text" : "password"}
                  name="newPassword"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => handlePasswordVisibility("new")}
                  className="absolute right-2 top-2.5 text-gray-500"
                >
                  {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => handlePasswordVisibility("confirm")}
                  className="absolute right-2 top-2.5 text-gray-500"
                >
                  {showPassword.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors">
                Change Password
              </button>
            </div>
          </div>

          {/* Email Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Email</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Current Email</p>
                <p className="font-medium">robert123@gmail.com</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-gray-500">Status:</span>
                  <span className="ml-2 text-sm text-red-500 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                    Unconfirmed
                  </span>
                </div>
                <button className="text-green-700 text-sm mt-2">Request Confirmation Email</button>
              </div>

              <h3 className="font-medium pt-4">Change your Email</h3>
              <input
                type="email"
                name="newEmail"
                placeholder="New Email"
                value={formData.newEmail}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="confirmEmail"
                placeholder="Confirm new Email"
                value={formData.confirmEmail}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="relative">
                <input
                  type={showPassword.closeAccount ? "text" : "password"}
                  name="emailPassword"
                  placeholder="Enter Password"
                  value={formData.emailPassword}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => handlePasswordVisibility("closeAccount")}
                  className="absolute right-2 top-2.5 text-gray-500"
                >
                  {showPassword.closeAccount ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors">
                Change Email
              </button>
            </div>
          </div>

          {/* Close Account Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Close your Account</h2>
            <p className="text-gray-600 mb-4">Please help us improve by telling us why you are leaving?</p>
            <select
              name="closeReason"
              value={formData.closeReason}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            >
              <option value="">Select a reason...</option>
              <option value="reason1">Not using the platform enough</option>
              <option value="reason2">Found a better alternative</option>
              <option value="reason3">Technical issues</option>
              <option value="reason4">Other</option>
            </select>

            <div className="mb-4">
              <p className="text-gray-600 mb-2">Do you have anything to tell us? (Optional)</p>
              <textarea
                name="additionalFeedback"
                value={formData.additionalFeedback}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded h-24"
              />
            </div>

            <div className="relative mb-4">
              <input
                type="password"
                name="closePassword"
                placeholder="Enter Password *"
                value={formData.closePassword}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
              Close Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSetting

