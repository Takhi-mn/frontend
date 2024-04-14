"use client";
import React, { useContext, useEffect, useState } from "react";
import { tourismData } from "@/data/camp";
import TourCard from "@/app/[locale]/tourism/booking/components/TourCard";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";
import { TourismContext } from "@/context/TourismProvider";

type Props = {};

const TourismSwiper = (props: Props) => {
  const [my_swiper, set_my_swiper] = useState<SwiperCore>();
  const languageContext = useLanguage();
  const { bookingData, getBookingData } = useContext(TourismContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!bookingData) {
      getBookingData();
    }
  }, []);
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
          1110: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1485: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {bookingData
          ?.filter((data) => data.contenttype.name_en === "tourism-tours")
          .map((tourism, index) => (
            <SwiperSlide className="mx-auto" key={tourism.id + index}>
              <TourCard tourism={tourism} selectedLanguage={selectedLanguage} />
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
