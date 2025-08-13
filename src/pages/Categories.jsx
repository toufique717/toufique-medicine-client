
 
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

import image1 from "../assets/gg1.jpg"
import image2 from "../assets/gg2.jpg"
import image3 from "../assets/gg3.jpg"
import image4 from "../assets/gg4.jpg"
import image5 from "../assets/gg5.jpg"
import image6 from "../assets/gg6.jpg"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Sectiontitle from './Sectiontitle';
const Categories = () => {
    return (
        <div>


          <Sectiontitle
          heading={"--From 11:00am to 10:00pm--"}
          subheading={" ORDER NOW"}>

          </Sectiontitle>
           

 

            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
 
            <div className="relative">
             <img src={image1} className="w-full   h-96 " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-4xl px-4 py-2">
               Matha betha
             </p>
             </div>
 
        </SwiperSlide>


        <SwiperSlide> 
 
            <div className="relative">
             <img src={image2} className="w-full   h-96 " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-4xl px-4 py-2">
              Gastric
             </p>
             </div>
 
        </SwiperSlide>



        <SwiperSlide> 
 
            <div className="relative">
             <img src={image3} className="w-full   h-96 " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-4xl px-4 py-2">
              Fever
             </p>
             </div>
 
        </SwiperSlide>



        <SwiperSlide> 
 
            <div className="relative">
             <img src={image4} className="w-full   h-96 " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-4xl px-4 py-2">
              Caugh
             </p>
             </div>
 
        </SwiperSlide>



        <SwiperSlide> 
 
            <div className="relative">
             <img src={image5} className="w-full   h-96 " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-4xl px-4 py-2">
              Sleep
             </p>
             </div>
 
        </SwiperSlide>







        <SwiperSlide> 
 
            <div className="relative">
             <img src={image6} className="w-full   h-96 " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-4xl px-4 py-2">
              Nothing
             </p>
             </div>
 
        </SwiperSlide>
         
      </Swiper>





             
        </div>
    );
};

export default Categories;