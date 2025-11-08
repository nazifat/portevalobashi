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
                    
                })}</SwiperSlide>
        
            </Swiper>
        </div>
    );
};

export default Banner;