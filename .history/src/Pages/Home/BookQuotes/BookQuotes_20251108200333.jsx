import React from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    id: 1,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    book: "The Innovation Secrets of Steve Jobs",
  },
  {
    id: 2,
    quote: "It is not that we have a short time to live, but that we waste much of it.",
    author: "Seneca",
    book: "On the Shortness of Life",
  },
  {
    id: 3,
    quote: "You become what you give your attention to.",
    author: "Epictetus",
    book: "Discourses and Selected Writings",
  },
  {
    id: 4,
    quote: "The more you know who you are and what you want, the less you let things upset you.",
    author: "Sofia Coppola",
    book: "Lost in Translation",
  },
  {
    id: 5,
    quote: "We suffer more in imagination than in reality.",
    author: "Seneca",
    book: "Letters from a Stoic",
  },
  {
    id: 6,
    quote: "Your future is created by what you do today, not tomorrow.",
    author: "Robert Kiyosaki",
    book: "Rich Dad Poor Dad",
  },
];

const BookQuotes = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Inspiring <span className="text-blue-600">Quotes from Books</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Words that stay with you — wisdom from timeless authors and thinkers.
        </p>
      </div>

      {/* Quotes Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {quotes.map((q) => (
          <motion.div
            key={q.id}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all"
          >
            <p className="text-lg italic text-gray-700 leading-relaxed mb-4">
              “{q.quote}”
            </p>
            <div className="text-right">
              <p className="font-semibold text-blue-600">{q.author}</p>
              <p className="text-gray-400 text-sm">{q.book}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BookQuotes;
