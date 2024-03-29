"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function TourismPhotoSlider({ photos }: any) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 800,
          depth: 1000,
          modifier: 0.3,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {photos?.map((photo: any, index: number) => (
          <div key={photo + index}>
            <SwiperSlide>
              <img className="w-96 h-60" src={photo} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
