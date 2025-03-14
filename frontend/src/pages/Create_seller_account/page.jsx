import React from 'react'
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar_without_logo from '../../components/navbar_without_logo'

const Create_seller_account = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (formSubmitted) {
            setTimeout(() => {
                navigate("/shop_register");
            }, 2000);
        }
    }, [formSubmitted, navigate]);


    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
    }

    const passwordMatch = password === confirmPassword && password.length > 0

    return (
        <div>
            <Navbar_without_logo />
            <div className=" flex items-start justify-center p-4 pt-10 overflow-hidden">
                <div className="  overflow-hidden">
                    {formSubmitted ? (
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Account Created!</h2>     
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h1 className="text-3xl font-bold text-gray-800">Create Your Seller Account</h1>
                            <p className="text-gray-600">Join thousands of successful sellers on Nivara</p>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Set Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 px-3"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500 ${
                                            confirmPassword && !passwordMatch ? "border-red-500" : confirmPassword && passwordMatch ? "border-green-500" : ""
                                        }`}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 px-3"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                                {confirmPassword && !passwordMatch && (
                                    <p className="text-red-600 text-sm mt-1">Passwords do not match</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-[#26570E] hover:bg-emerald-700 text-white font-medium rounded-lg shadow-md transition-all"
                            >
                                Create Account
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Create_seller_account