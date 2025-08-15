 
import Sectiontitle from './Sectiontitle';

//react rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

//for comment caresole

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {

    const[revew,setrevew] = useState([]);
    useEffect(()=>
        {
            fetch('revews.json')
            .then(res=>res.json())
            .then(data=>setrevew(data))
        },[])
    return (
        <div>
            <section>
                <Sectiontitle
                heading={'check it out from our menu'}
                subheading={'TESTIMONIALS'}>

                </Sectiontitle>
            </section>

             <div className="p-10 flex flex-col items-center justify-center text-center space-y-6">

  {/* Star Rating */}
  <div>
    <Rating
      style={{ maxWidth: 180 }}
      value={3}
      readOnly
    />
  </div>

  {/* Carousel */}
  <div className=" w-[900px] h-[200px] max-w-2xl">
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {revew.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center justify-center space-y-2 px-12 py-10">
            <p className=  " italic">{item.details}</p>
            <p className="font-bold text-xl text-yellow-500 ">{item.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

</div>

        </div>
    );
};

export default Testimonials;