import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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

const BookQuotesSlider = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          <span className="text-blue-600">Quotes</span> from Books
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Let wisdom from great books inspire your thoughts every day.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        navigation={true}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="max-w-3xl mx-auto"
      >
        {quotes.map((q) => (
          <SwiperSlide key={q.id}>
            <div className="bg-white rounded-2xl shadow-md p-10 text-center mx-auto max-w-2xl">
              <p className="text-xl italic text-gray-700 leading-relaxed mb-6">
                “{q.quote}”
              </p>
              <div>
                <p className="font-semibold text-blue-600">{q.author}</p>
                <p className="text-gray-400 text-sm">{q.book}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BookQuotesSlider;
