import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReadingCongratsPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // ⏱ Wait 10 seconds (change to 60000 for 1 minute)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl text-center p-8 w-80"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* ❌ Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
            >
              ✖
            </button>

            {/* ✅ Green Tick Animation */}
            <motion.div
              className="mx-auto mb-4 w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <motion.path
                  d="M5 13l4 4L19 7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.svg>
            </motion.div>

            {/* 🎉 Text */}
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              অভিনন্দন! 🎉
            </h2>
            <p className="text-gray-700 mb-4">
              আপনি এক মিনিট ধরে মনোযোগ দিয়ে পড়ছেন!  
              আজ আপনি নিজেকে আরও উন্নত করছেন 🌱
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-600 transition-all duration-300"
            >
              ধন্যবাদ 💚
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReadingCongratsPopup;
