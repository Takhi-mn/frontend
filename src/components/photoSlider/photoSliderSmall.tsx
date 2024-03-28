"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function PhotoSlider({ photos }: any) {
  console.log("photos", photos);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 1800,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {photos?.map((photo: any) => (
          <SwiperSlide>
            <img src={photo} style={{ borderRadius: "7px" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
