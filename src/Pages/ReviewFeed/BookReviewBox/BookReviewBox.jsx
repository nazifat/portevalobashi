import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// Sample books data
const books = [
  { id: 1, title: "The Alchemist", writer: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", writer: "James Clear" },
  { id: 3, title: "Why We Sleep", writer: "Matthew Walker" },
];

const BookReviewBox = () => {
  const [selectedBook, setSelectedBook] = useState("");
  const [writerName, setWriterName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleSubmit = () => {
    if (!selectedBook || !writerName || !review || rating === 0) {
      alert("দয়া করে সব তথ্য পূরণ করুন!");
      return;
    }
    console.log({ selectedBook, writerName, review, rating });
    alert("আপনার রিভিউ সফলভাবে জমা হয়েছে!");
    setSelectedBook("");
    setWriterName("");
    setReview("");
    setRating(0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">বই নির্বাচন করুন</h2>

      {/* Book Dropdown */}
      <select
        value={selectedBook}
        onChange={(e) => setSelectedBook(e.target.value)}
        className="w-full bg-gray-100 rounded-xl p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="">-- একটি বই নির্বাচন করুন --</option>
        {books.map((book) => (
          <option key={book.id} value={book.title}>
            {book.title}
          </option>
        ))}
      </select>

      {/* Writer Name Input */}
      <input
        type="text"
        placeholder="লেখকের নাম লিখুন"
        value={writerName}
        onChange={(e) => setWriterName(e.target.value)}
        className="w-full bg-gray-100 rounded-xl p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      {/* Review Input */}
      <textarea
        rows="3"
        placeholder="আপনার রিভিউ লিখুন..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="w-full bg-gray-100 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-3"
      />

      {/* Star Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <button
              key={i}
              type="button"
              className="focus:outline-none"
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              <FaStar
                size={24}
                className={`mr-1 cursor-pointer transition ${
                  ratingValue <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        রিভিউ জমা দিন
      </button>
    </div>
  );
};

export default BookReviewBox;
