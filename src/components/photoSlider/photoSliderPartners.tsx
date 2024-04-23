"use client";

import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

export default function PhotoSliderPartners({ photos }: any) {
  const [my_swiper, set_my_swiper] = useState<SwiperCore>();
  return (
    <>
      <Swiper
        onInit={(ev) => {
          set_my_swiper(ev);
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {photos?.map((photo: any, index: number) => (
          <div key={photo + index}>
            <SwiperSlide>
              <img
                className="w-96 h-52 object-cover rounded-sm"
                src={photo.url}
                alt="takhi.mn"
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}