import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slider from '/public/slider.json';

console.log(slider)



// import required modules
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay, EffectFade]}
                autoplay={{
                    delay: 2000, // time between slides (in ms)
                    disableOnInteraction: false, // keeps autoplay even after user interaction
                }}
                effect='fade'

                className="mySwiper">
                {slider.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="hero min-h-[600px]"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">{slide.heading}</h1>
                                    <p className="mb-5">{slide.subtext}</p>
                                    <button className="btn">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Banner;