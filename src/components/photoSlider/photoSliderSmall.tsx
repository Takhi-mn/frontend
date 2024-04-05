"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";

export default function PhotoSliderSmall({ photos }: any) {
  const [my_swiper, set_my_swiper] = useState<SwiperCore>();
  return (
    <>
      <Swiper
        onInit={(ev) => {
          set_my_swiper(ev);
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 800,
          depth: 1000,
          modifier: 0.3,
          slideShadows: false,
        }}
        autoplay={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {photos?.map((photo: any) => (
          <SwiperSlide key={photo}>
            <img className="w-96 h-52 object-cover rounded-sm" src={photo} />
          </SwiperSlide>
        ))}
        <div className="w-full flex justify-center gap-6">
          <button
            onClick={() => {
              my_swiper?.slidePrev();
            }}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => {
              my_swiper?.slideNext();
            }}
          >
            <FaArrowRight />
          </button>
        </div>
      </Swiper>
    </>
  );
}
