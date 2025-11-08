import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Mastering React from Scratch",
    desc: "Learn to build fast, modern web apps using React and Tailwind CSS.",
    image: "https://source.unsplash.com/random/800x600?react",
    price: "৳1999",
  },
  {
    id: 2,
    title: "The Complete JavaScript Course",
    desc: "Deep dive into JS — from basics to advanced topics like async and ES6.",
    image: "https://source.unsplash.com/random/800x600?javascript",
    price: "৳1499",
  },
  {
    id: 3,
    title: "UI/UX Design for Beginners",
    desc: "Learn the art of creating beautiful, user-friendly designs.",
    image: "https://source.unsplash.com/random/800x600?design",
    price: "৳999",
  },
  {
    id: 4,
    title: "MERN Stack Crash Course",
    desc: "Build full-stack applications using MongoDB, Express, React, and Node.",
    image: "https://source.unsplash.com/random/800x600?coding",
    price: "৳2499",
  },
  {
    id: 5,
    title: "Digital Declutter & Focus",
    desc: "Simplify your digital life and stay productive every day.",
    image: "https://source.unsplash.com/random/800x600?focus",
    price: "৳799",
  },
  {
    id: 6,
    title: "Personal Branding & Content Writing",
    desc: "Grow your personal brand with storytelling and content strategy.",
    image: "https://source.unsplash.com/random/800x600?writing",
    price: "৳1299",
  },
];

const CourseSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Our Popular <span className="text-blue-600">Courses</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Learn practical skills and grow your career with our hand-picked online courses.
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
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm">
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

export default CourseSection;
