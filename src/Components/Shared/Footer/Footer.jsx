import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
 <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* About Section */}
    <div>
      <h3 className="text-xl font-bold text-white mb-4">আমাদের সম্পর্কে</h3>
      
      <div className="mb-4 flex justify-start">
        <img
          src="https://i.ibb.co/4wtwHFmK/Porte-Valobashi-Bookstore-Logo-with-Slogan.png"
          alt="Porte Valobashi Bookstore Logo"
          className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain"
        />
      </div>

      <p className="text-gray-400 leading-relaxed">
        স্বাগতম নাজিফার ব্লগে — মননশীল জীবনযাপন ও ব্যক্তিগত উন্নতির জন্য জ্ঞান, কোর্স এবং অনুপ্রেরণা শেয়ার করা হয় এখানে।
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-bold text-white mb-4">দ্রুত লিংক</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-500 transition-colors">হোম</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors">ব্লগ</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors">কোর্স</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors">আমাদের সম্পর্কে</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors">যোগাযোগ</a></li>
      </ul>
    </div>

    {/* Courses Links */}
    <div>
      <h3 className="text-xl font-bold text-white mb-4">কোর্সসমূহ</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-500 transition-colors">রিঅ্যাক্ট</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors">জাভাস্ক্রিপ্ট</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors">UI/UX ডিজাইন</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors">MERN স্ট্যাক</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-xl font-bold text-white mb-4">আমাদের অনুসরণ করুন</h3>
      <div className="flex space-x-4 text-xl">
        <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
        <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
        <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedinIn /></a>
      </div>
    </div>

  </div>

  {/* Bottom Text */}
  <div className="text-center text-gray-500 mt-12 text-sm border-t border-gray-700 pt-6">
    &copy; {new Date().getFullYear()} নাজিফার ব্লগ। সর্বস্বত্ব সংরক্ষিত।
  </div>
</footer>


  );
};

export default Footer;
