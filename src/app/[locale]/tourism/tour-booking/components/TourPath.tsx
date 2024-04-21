"use client";
import { path } from "@/assets";
import { campRoutes } from "@/data";
import Image from "next/image";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SwiperCore from "swiper";
import "swiper/css";
type Props = {};

const LocatiaonCircle = () => {
  return (
    <div className="w-6 h-6 bg-primary rounded-full border-[0.8px] border-white flex justify-center items-center">
      <FaLocationDot color="white" size={10} />
    </div>
  );
};

const RouteInfo = ({
  setMySwiper,
  mySwiper,
  selectedRoute,
  setSelectedRoute,
}: any) => {
  return (
    <div className="w-full lg:w-1/2 mt-10 relative flex items-center">
      <button
        onClick={() => {
          mySwiper.slidePrev();
          if (selectedRoute > 0) {
            setSelectedRoute(selectedRoute - 1);
          }
        }}
        className="bg-primary rounded-full w-7 h-7 flex justify-center items-center -mt-72"
      >
        <IoIosArrowBack color="white" />
      </button>
      <Swiper
        allowTouchMove={false}
        noSwiping={true}
        spaceBetween={10}
        onInit={(ev) => {
          setMySwiper(ev);
        }}
        className="max-w-[60vw] lg:max-w-96"
      >
        {campRoutes.map((route, index) => (
          <SwiperSlide key={route.route + index}>
            <div className="">
              <Image
                width={300}
                height={180}
                alt="routeimage"
                src={route.image}
              />
              <div className="mt-10">
                <h3 className="font-semibold mb-4">{route.route}</h3>
                <p>{route.title}</p>
                <p>{route.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => {
          mySwiper.slideNext();
          if (selectedRoute! < campRoutes.length - 1) {
            setSelectedRoute(selectedRoute + 1);
          }
        }}
        className="bg-primary rounded-full w-7 h-7 flex justify-center items-center -mt-72"
      >
        <IoIosArrowForward color="white" />
      </button>
    </div>
  );
};

const TourPath = (props: Props) => {
  const [mySwiper, setMySwiper] = useState<SwiperCore>();
  const [selectedRoute, setSelectedRoute] = useState(0);
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center ">
      <div className=" relative">
        <Image
          width={500}
          height={350}
          alt="Route"
          src={path.src}
          // className="w-[335px] h-[248px]"
        />
        {campRoutes.map((route, index) => (
          <div
            key={route.route + index}
            onClick={() => {
              setSelectedRoute(index);
              mySwiper?.slideTo(index);
            }}
            className={`${
              selectedRoute === index ? "scale-150" : ""
            } absolute z-10 ${route.top} ${route.left}`}
          >
            <LocatiaonCircle />
          </div>
        ))}

        <div className="w-full h-full bg-black bg-opacity-30 absolute top-0" />
      </div>
      <RouteInfo
        setMySwiper={setMySwiper}
        mySwiper={mySwiper}
        selectedRoute={selectedRoute}
        setSelectedRoute={setSelectedRoute}
      />
    </div>
  );
};

export default TourPath;
