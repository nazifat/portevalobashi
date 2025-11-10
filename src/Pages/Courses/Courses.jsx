import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "শূন্য থেকে রিঅ্যাক্ট মাস্টারি করুন",
    desc: "React এবং Tailwind CSS ব্যবহার করে দ্রুত ও আধুনিক ওয়েব অ্যাপ তৈরি করতে শিখুন।",
    image: "https://source.unsplash.com/random/800x600?react",
    price: "৳১৯৯৯",
  },
  {
    id: 2,
    title: "সম্পূর্ণ জাভাস্ক্রিপ্ট কোর্স",
    desc: "JS-এর বেসিক থেকে শুরু করে async এবং ES6-এর মতো উন্নত টপিক পর্যন্ত গভীরভাবে শিখুন।",
    image: "https://source.unsplash.com/random/800x600?javascript",
    price: "৳১৪৯৯",
  },
  {
    id: 3,
    title: "শুরুর জন্য UI/UX ডিজাইন",
    desc: "সুন্দর ও ব্যবহারবান্ধব ডিজাইন তৈরির কৌশল শিখুন।",
    image: "https://source.unsplash.com/random/800x600?design",
    price: "৳৯৯৯",
  },
  {
    id: 4,
    title: "MERN স্ট্যাক ক্র্যাশ কোর্স",
    desc: "MongoDB, Express, React এবং Node ব্যবহার করে ফুল-স্ট্যাক অ্যাপ্লিকেশন তৈরি করুন।",
    image: "https://source.unsplash.com/random/800x600?coding",
    price: "৳২৪৯৯",
  },
  {
    id: 5,
    title: "ডিজিটাল ডিক্লাটার ও ফোকাস",
    desc: "ডিজিটাল জীবনে অপ্রয়োজনীয়তা কমিয়ে প্রতিদিন উৎপাদনশীল থাকুন।",
    image: "https://source.unsplash.com/random/800x600?focus",
    price: "৳৭৯৯",
  },
  {
    id: 6,
    title: "পার্সোনাল ব্র্যান্ডিং ও কনটেন্ট রাইটিং",
    desc: "স্টোরিটেলিং ও কনটেন্ট স্ট্র্যাটেজির মাধ্যমে নিজের ব্যক্তিগত ব্র্যান্ড গড়ে তুলুন।",
    image: "https://source.unsplash.com/random/800x600?writing",
    price: "৳১২৯৯",
  },
];


const Courses = () => {
  return (
    <div className="bg-gray-200 py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          আমাদের জনপ্রিয়   <span className="text-red-300">কোর্সসমূহ</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          আজই শিখুন, আগামিকাল এগিয়ে যান।
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-[220px]">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{course.desc}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-blue-600">{course.price}</span>
                <button className="px-4 py-2 bg-red-300 text-white rounded-lg hover:bg-red-400 transition-all shadow-sm">
                  Buy Course
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
