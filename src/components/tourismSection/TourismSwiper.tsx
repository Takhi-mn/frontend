"use client";
import React, { useState } from "react";
import { tourismData } from "@/data/camp";
import TourCard from "@/app/[locale]/tourism/booking/components/TourCard";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";

type Props = {};

const TourismSwiper = (props: Props) => {
  const [my_swiper, set_my_swiper] = useState<SwiperCore>();
  const languageContext = useLanguage();
  return (
    <div className="">
      <Swiper
        onInit={(ev) => set_my_swiper(ev)}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {tourismData.map((tourism, index) => (
          <SwiperSlide key={tourism.title + index}>
            <TourCard tourism={tourism} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" flex justify-between relative z-10 mt-5">
        <button
          onClick={() => {
            my_swiper?.slidePrev();
          }}
        >
          <FaArrowLeft color="white" size={25} />
        </button>
        <Link href={`${languageContext.selectedLanguage}/tourism`}>
          <button className="text-xl">See more</button>
        </Link>
        <button
          onClick={() => {
            my_swiper?.slideNext();
          }}
        >
          <FaArrowRight color="white" size={25} />
        </button>
      </div>
    </div>
  );
};

export default TourismSwiper;
