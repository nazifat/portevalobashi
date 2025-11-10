import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800">এখন লগইন করুন!</h1>
        <p className="text-gray-500 mt-2">আপনার অ্যাকাউন্টে প্রবেশ করতে ইমেল এবং পাসওয়ার্ড ব্যবহার করুন</p>
      </div>

      {/* Login Card */}
      <div className="card bg-white w-full max-w-md shadow-2xl rounded-2xl p-6">
        <div className="card-body space-y-4">
          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">ইমেল</label>
            <input
              type="email"
              placeholder="আপনার ইমেল লিখুন"
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300 transition"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">পাসওয়ার্ড</label>
            <input
              type="password"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300 transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-red-300 hover:underline text-sm">
              পাসওয়ার্ড ভুলে গেছেন?
            </a>
          </div>

          {/* Login Button */}
          <button className="btn bg-red-300 text-white w-full rounded-xl hover:bg-red-400 transition mt-2">
            লগইন
          </button>

          {/* Registration Link */}
          <p className="text-center text-gray-500 text-sm mt-2">
            অ্যাকাউন্ট নেই?{" "}
            <Link to="/registration" className="text-red-300 font-medium hover:underline">
              রেজিস্ট্রেশন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
