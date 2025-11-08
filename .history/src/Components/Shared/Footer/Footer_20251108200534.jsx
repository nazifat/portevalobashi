import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-gray-400">
            Welcome to Nazifa’s Blog — sharing insights, courses, and inspiration for mindful living and personal growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Courses</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Courses Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Courses</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition-colors">React</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">JavaScript</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">MERN Stack</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        &copy; {new Date().getFullYear()} Nazifa’s Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
