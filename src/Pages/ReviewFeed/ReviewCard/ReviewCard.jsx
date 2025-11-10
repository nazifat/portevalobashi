import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    if (!comment.trim()) return alert("কমেন্ট লিখুন!");
    console.log("Comment:", comment);
    setComment("");
    alert("কমেন্ট জমা হয়েছে!");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow">
      {/* Profile */}
      <div className="flex items-center mb-3">
        <img
          src={review.profile}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{review.name}</h3>
          <p className="text-gray-500 text-sm">{review.time}</p>
        </div>
      </div>

      {/* Book Info */}
      <div className="flex items-start mb-3 gap-4">
        <img
          src={review.cover}
          alt={review.book}
          className="w-24 h-36 object-cover rounded-lg shadow"
        />
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">{review.book}</h4>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < review.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-700">{review.content}</p>
        </div>
      </div>

      {/* Reactions & Comment Button */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-3 mt-2">
        <div className="flex space-x-4 text-gray-500 text-sm">
          <button className="flex items-center gap-1 hover:text-blue-500 transition">
            👍 লাইক
          </button>
          <button className="flex items-center gap-1 hover:text-red-500 transition">
            ❤️ ভালো লেগেছে
          </button>
          <button className="flex items-center gap-1 hover:text-yellow-500 transition">
            😮 অবাক
          </button>
        </div>
        <button
          onClick={() => setShowComment(!showComment)}
          className="text-gray-500 text-sm hover:text-blue-500 transition"
        >
          মন্তব্য
        </button>
      </div>

      {/* Comment Box */}
      {showComment && (
        <div className="mt-3">
          <textarea
            rows="2"
            placeholder="আপনার মন্তব্য লিখুন..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-gray-100 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-2"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            জমা দিন
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
