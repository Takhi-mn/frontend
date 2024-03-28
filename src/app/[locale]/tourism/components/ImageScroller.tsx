"use client";
import { campImages } from "@/data/camp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React from "react";

type Props = {};
import "swiper/css";

const ImageScroller = (props: Props) => {
  return (
    <div className="relative z-0 w-full">
      <h2 className="text-white absolute z-20 top-1/3 left-1/3 sm:left-24 md:left-44 text-4xl lg:text-6xl 2xl:text-9xl 2xl:left-1/4">
        TAKHI
      </h2>
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {campImages.map((item, index) => (
          <div key={item.image.src + index}>
            <SwiperSlide key={index} className="relative z-50 w-full h-auto">
              <div className="absolute z-20 w-full h-full bg-black opacity-35" />
              <img
                className="w-full h-56 sm:h-96 md:h-[500px] 2xl:h-screen object-cover relative z-0"
                src={item.image.src}
                alt=""
              />
              <h3
                className="absolute left-1/4 z-30 top-1/2 sm:top-40 
            sm:left-60 md:top-44 md:left-72 font-semibold text-3xl 
            lg:text-5xl lg:top-52 lg:left-[360px] 2xl:text-8xl 2xl:top-[350px] 2xl:left-1/2  text-[#FF7F50]"
              >
                {item.text}
              </h3>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageScroller;
