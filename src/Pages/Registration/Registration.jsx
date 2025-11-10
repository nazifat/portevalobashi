import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="py-10 bg-red-50 min-h-screen flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center text-red-700 mb-8">
        এখন রেজিস্ট্রেশন করুন!
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl w-full px-4">
        {/* Illustration */}
        <div className="text-center lg:text-left flex-1">
          <img
            src="https://i.ibb.co/nsZGCMmm/illustration-what-is-two-factor-authentication-2fa-and-how-to-set-it-up-securely-768x504.png"
            alt="Registration Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Registration Card */}
        <div className="card bg-white flex-1 max-w-md w-full shadow-2xl rounded-2xl p-6">
          <div className="card-body space-y-4">
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">ইমেল</label>
              <input
                type="email"
                placeholder="আপনার ইমেল লিখুন"
                className="input input-bordered rounded-xl focus:ring-2 focus:ring-red-300 focus:outline-none transition"
              />
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">নাম</label>
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="input input-bordered rounded-xl focus:ring-2 focus:ring-red-300 focus:outline-none transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">পাসওয়ার্ড</label>
              <input
                type="password"
                placeholder="পাসওয়ার্ড লিখুন"
                className="input input-bordered rounded-xl focus:ring-2 focus:ring-red-300 focus:outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="password"
                placeholder="পাসওয়ার্ড পুনরায় লিখুন"
                className="input input-bordered rounded-xl focus:ring-2 focus:ring-red-300 focus:outline-none transition"
              />
            </div>

            {/* Register Button */}
            <button className="btn bg-red-300 text-white w-full rounded-xl hover:bg-red-400 transition mt-2">
              রেজিস্ট্রেশন করুন
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-500 text-sm mt-2">
              ইতিমধ্যেই অ্যাকাউন্ট আছে?{" "}
              <Link
                to="/login"
                className="text-red-500 font-medium hover:underline"
              >
                লগইন করুন
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
