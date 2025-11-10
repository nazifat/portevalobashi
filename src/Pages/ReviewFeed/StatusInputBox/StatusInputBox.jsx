import React from "react";

const StatusInputBox = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-6 max-w-xl mx-auto">
      <div className="flex items-center gap-3">
        {/* Profile Picture */}
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        
        {/* Input Field */}
        <input
          type="text"
          placeholder="আপনার স্ট্যাটাস লিখুন..."
          className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Optional Actions (like FB) */}
      <div className="flex justify-between mt-3 text-gray-500 text-sm">
        <button className="flex items-center gap-1 hover:text-blue-500 transition">
          📷 ছবি
        </button>
        <button className="flex items-center gap-1 hover:text-green-500 transition">
          🎥 ভিডিও
        </button>
        <button className="flex items-center gap-1 hover:text-red-500 transition">
          😃 অনুভূতি
        </button>
      </div>
    </div>
  );
};

export default StatusInputBox;
