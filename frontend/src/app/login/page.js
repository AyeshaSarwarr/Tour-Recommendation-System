
"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      await axios.post("http://127.0.0.1:8000/api/login/", formData);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/assets/images/bglogin.jpg')",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Form Container */}
      <div className="relative w-full max-w-sm bg-gray-900 bg-opacity-90 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-2xl font-bold mb-4">Log In</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-1">
            <label className="block text-sm">Email</label>
            <div className="relative">
              <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="block text-sm">Password</label>
            <div className="relative">
              <AiOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Error & Success Messages */}
          {error && (
            <div className="flex items-center p-3 text-sm text-red-600 bg-red-200 rounded-md">
              <FaExclamationCircle className="mr-2" /> {error}
            </div>
          )}
          {message && (
            <div className="flex items-center p-3 text-sm text-green-600 bg-green-200 rounded-md">
              <FaCheckCircle className="mr-2" /> {message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold"
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          <p>
            New Here?{" "}
            <button
              onClick={() => router.push("/signup")}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>

      {/* Scrolling Text */}
      <div className="absolute bottom-5 w-full overflow-hidden">
        <div className="scrolling-text text-yellow-300 text-sm font-semibold">
          Welcome to Our Platform - Enjoy the Experience! &nbsp; • &nbsp;
          Welcome to Our Platform - Enjoy the Experience! &nbsp; • &nbsp;
        </div>
      </div>

      <style jsx>{`
        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          will-change: transform;
          animation: scrollText 10s linear infinite;
        }
        @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Login;

// import React from "react";
// import "@/app/login/Login.css";
// // import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="body">
//       <div className="container">
//         <h1 className="title">Travel</h1>

//         <form className="signup-form">
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button type="submit">Login</button>
//         </form>

//         <p className="switch-page">
//           Don't have an account? <a href="/SignUp">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
