// Sidebar.js
import React from "react";

const SideBar = () => {
  return (
    <div className="bg-red-300 rounded-2xl shadow-md p-6 w-64 hidden lg:block">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Menu</h2>
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            হোম | My Reviews |Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            সব রিভিউ
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            ৫ তারকা রিভিউ
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            ৪ তারকা রিভিউ
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            আমার ফেভারিট বই
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
