import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import './BookQuotes.css';


const quotes = [
  {
    id: 1,
    quote: "দারুণ কিছু করার একমাত্র উপায় হলো, তুমি যা করছো তা ভালোবাসা।",
    author: "স্টিভ জবস",
    book: "দ্য ইনোভেশন সিক্রেটস অব স্টিভ জবস",
  },
  {
    id: 2,
    quote: "আমাদের জীবনের সময় কম নয়, বরং আমরা তার অনেকটাই অপচয় করি।",
    author: "সেনেকা",
    book: "অন দ্য শর্টনেস অব লাইফ",
  },
  {
    id: 3,
    quote: "তুমি সেই মানুষে পরিণত হও, যার দিকে তুমি তোমার মনোযোগ দাও।",
    author: "এপিকটিটাস",
    book: "ডিসকোর্সেস অ্যান্ড সিলেক্টেড রাইটিংস",
  },
  {
    id: 4,
    quote: "তুমি যত বেশি জানবে তুমি কে এবং কী চাও, তত কমই জিনিসগুলো তোমাকে বিরক্ত করবে।",
    author: "সোফিয়া কপোলা",
    book: "লস্ট ইন ট্রান্সলেশন",
  },
  {
    id: 5,
    quote: "আমরা বাস্তবতার চেয়ে কল্পনায় বেশি কষ্ট পাই।",
    author: "সেনেকা",
    book: "লেটারস ফ্রম আ স্টোইক",
  },
  {
    id: 6,
    quote: "তোমার ভবিষ্যৎ তৈরি হয় আজ তুমি যা করছো তার দ্বারা, কাল যা করবে তার দ্বারা নয়।",
    author: "রবার্ট কিয়োসাকি",
    book: "রিচ ড্যাড পুওর ড্যাড",
  },
];


const BookQuotesSlider = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          বই থেকে <span className="text-red-300">উক্তি</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          মহান বইগুলোর জ্ঞানে প্রতিদিন তোমার চিন্তাকে অনুপ্রাণিত হতে দাও।
        </p>
      </div>


      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        navigation={true}
        // effect="fade"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
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
                <p className="font-semibold text-red-300">{q.author}</p>
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
