 import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


import image1 from "../assets/g1.jpg"
import image2 from "../assets/g2.jpg"
import image3 from "../assets/g3.jpg"
import image4 from "../assets/g4.jpg"
import image5 from "../assets/g5.jpg"
import image6 from "../assets/g6.jpg"

const Banner = () => {
    return (
        <div>



            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img
         src= {image5}
         alt="Slide 2"
     
        /></SwiperSlide>

        <SwiperSlide><img
         src= {image2}
         alt="Slide 2"
     
        /></SwiperSlide>

        <SwiperSlide><img
         src= {image3}
         alt="Slide 2"
     
        /></SwiperSlide>


        <SwiperSlide><img
         src= {image4}
         alt="Slide 2"
     
        /></SwiperSlide>


        <SwiperSlide><img
         src= {image5}
         alt="Slide 2"
     
        /></SwiperSlide>



        <SwiperSlide><img
         src= {image6}
         alt="Slide 2"
     
        /></SwiperSlide>


        <SwiperSlide><img
         src= {image3}
         alt="Slide 2"
     
        /></SwiperSlide>


        <SwiperSlide><img
         src= {image2}
         alt="Slide 2"
     
        /></SwiperSlide>
        
      </Swiper>


            
        </div>
    );
};

export default Banner;