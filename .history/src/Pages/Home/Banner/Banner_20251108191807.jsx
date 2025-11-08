import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slider from '/public/slider.json';

console.log(slider)



// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>{slider.map(slide=>{
                    return <div key={slide.id} className="hero min-h-screen" style={{ backgroundImage: `url(${slide.image})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{slide.subtext}</h1>
                            <p className="mb-5">{slide.heading}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                })}</SwiperSlide>
        
            </Swiper>
        </div>
    );
};

export default Banner;