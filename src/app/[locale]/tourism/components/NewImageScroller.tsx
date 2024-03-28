"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { campImages } from "@/data/camp";

type Props = {};

function NoArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const NewImageScroller = (props: Props) => {
  const settings = {
    fade: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NoArrow />,
    prevArrow: <NoArrow />,
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {campImages.map((item) => (
            <div className="relative z-10">
              {" "}
              <div className="w-full h-56 sm:h-96 md:h-[500px] 2xl:h-screen absolute z-10 bg-black bg-opacity-30" />
              <img
                className="w-full h-56 sm:h-96 md:h-[500px] 2xl:h-screen object-cover relative z-0"
                src={item.image.src}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewImageScroller;
