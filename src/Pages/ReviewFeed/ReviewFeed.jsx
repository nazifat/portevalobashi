import React from "react";
import { FaStar } from "react-icons/fa";
import SideBar from "./Sidebar/SideBar";
import StatusInputBox from "./StatusInputBox/StatusInputBox";
import BookReviewBox from "./BookReviewBox/BookReviewBox";

// Sample book reviews data
const reviews = [
    {
        id: 1,
        profile: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "সোহিনী রহমান",
        time: "২ ঘন্টা আগে",
        book: "The Alchemist",
        rating: 5,
        content: "এই বইটি আমাকে অনেক অনুপ্রেরণা দিয়েছে। পড়ার সময় খুব আনন্দ লাগলো। Highly recommend!",
        cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&h=600",
    },
    {
        id: 2,
        profile: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "রাহুল দাস",
        time: "৫ ঘন্টা আগে",
        book: "Atomic Habits",
        rating: 4,
        content: "আদর্শ অভ্যাস গড়ার জন্য দারুন বই। অনেক ছোট কিন্তু কার্যকর টিপস আছে।",
        cover: "https://images.unsplash.com/photo-1523475496153-3b9e7b9c872e?auto=format&fit=crop&w=400&h=600",
    },
    {
        id: 3,
        profile: "https://randomuser.me/api/portraits/women/22.jpg",
        name: "নাজমা খান",
        time: "১ দিন আগে",
        book: "Why We Sleep",
        rating: 5,
        content: "ঘুমের বিজ্ঞান ও প্রয়োজনীয়তা সহজভাবে বোঝানো হয়েছে। জীবন বদলে দিতে পারে এমন বই।",
        cover: "https://images.unsplash.com/photo-1581091012184-ec61c07e7c8b?auto=format&fit=crop&w=400&h=600",
    },
    {
        id: 4,
        profile: "https://randomuser.me/api/portraits/men/30.jpg",
        name: "তানভীর আহমেদ",
        time: "২ দিন আগে",
        book: "Deep Work",
        rating: 4,
        content: "ফোকাস বাড়ানোর দারুন বই। কাজের মান উন্নয়নে অনেক সাহায্য করবে।",
        cover: "https://images.unsplash.com/photo-1573496774511-88b68e3f2052?auto=format&fit=crop&w=400&h=600",
    },
];

const ReviewFeed = () => {
    return (
        <div className="flex">
            <SideBar></SideBar>

            <div className="max-w-4xl mx-auto px-6 py-12">
                <BookReviewBox />

                <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
                    বই রিভিউ ফিড
                </h1>
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow"
                        >
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
                                                className={`${i < review.rating ? "text-yellow-400" : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-700">{review.content}</p>
                                </div>
                            </div>

                            {/* Reactions & Comment */}
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
                                <button className="text-gray-500 text-sm hover:text-blue-500 transition">
                                    মন্তব্য
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ReviewFeed;
