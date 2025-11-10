import React from "react";

// Product Data
const products = [
  {
    id: 1,
    title: "নোটবুক - ক্লাসিক",
    category: "স্টেশনারি",
    price: "৳২৫০",
    image: "https://source.unsplash.com/random/400x400?notebook",
  },
  {
    id: 2,
    title: "ফটো পোস্টার - প্রকৃতি",
    category: "পোস্টার",
    price: "৳৫০০",
    image: "https://source.unsplash.com/random/400x400?nature-poster",
  },
  {
    id: 3,
    title: "কলম সেট - প্রিমিয়াম",
    category: "স্টেশনারি",
    price: "৳৩৫০",
    image: "https://source.unsplash.com/random/400x400?pen",
  },
  {
    id: 4,
    title: "আর্ট পোস্টার - অ্যাবস্ট্রাক্ট",
    category: "পোস্টার",
    price: "৳৬০০",
    image: "https://source.unsplash.com/random/400x400?art-poster",
  },
  {
    id: 5,
    title: "মার্কার সেট",
    category: "স্টেশনারি",
    price: "৳৪০০",
    image: "https://source.unsplash.com/random/400x400?marker",
  },
  {
    id: 6,
    title: "ডেস্ক অর্গানাইজার",
    category: "অ্যাক্সেসরিজ",
    price: "৳৭৫০",
    image: "https://source.unsplash.com/random/400x400?desk",
  },
];

const ShopPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          আমাদের পণ্যসমূহ
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          স্টেশনারি, পোস্টার এবং এক্সেসরিজের অসাধারণ কালেকশন দেখুন। 
          বাড়ি, অফিস বা উপহারের জন্য একদম পারফেক্ট।
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-red-300 font-bold">{product.price}</span>
              <button className="bg-red-300 text-white px-3 py-1 rounded-lg hover:bg-red-400 transition">
                কার্টে যোগ করুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
