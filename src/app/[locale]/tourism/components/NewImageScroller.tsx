"use client";

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
  const textSettings = {
    autoplay: true,
    autplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NoArrow />,
    prevArrow: <NoArrow />,
  };
  return (
    <div className="relative overflow-hidden">
      <div className="slider-container">
        <Slider {...settings}>
          {campImages.map((item, index) => (
            <div key={item.image.src + index} className="relative z-10">
              <div className="w-full h-56 sm:h-96 md:h-[500px] 2xl:h-screen absolute z-10 bg-black bg-opacity-30" />
              <img
                className="w-full h-56 sm:h-96 md:h-[500px] 2xl:h-screen object-cover relative z-0"
                src={item.image.src}
                alt=""
              />
            </div>
          ))}
        </Slider>
        <div className="w-full h-56 sm:h-96 md:h-[500px] 2xl:h-screen absolute z-20 top-1/3 left-1/4 lg:left-[10%] xl:left-[20%] lg:flex ">
          <h1 className="text-white text-5xl md:text-8xl xl:text-9xl">TAKHI</h1>

          <div className="w-2/3 mt-6">
            <Slider
              {...textSettings}
              className="text-3xl md:text-5xl xl:text-7xl text-[#FF7F50]"
            >
              <h2>ECO CAMP</h2>
              <h2>TOURS/PRICE</h2>
              <h2>BOOKING CONTACT</h2>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewImageScroller;
