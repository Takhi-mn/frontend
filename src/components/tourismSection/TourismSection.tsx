import React from "react";
import TourismSwiper from "./TourismSwiper";

type Props = {};

const TourismSection = (props: Props) => {
  return (
    <div className="relative w-full px-10 py-6 lg:p-16 lg:px-28 text-white bg-tahi3 bg-center bg-cover">
      <h2 className="text-5xl relative z-10 text-center">Tourism</h2>
      <p className="w-1/2 text-xl relative z-10 text-center mx-auto my-10 hidden md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor
        nibh, aliquam id eros in, eleifend bibendum ex. Aenean quis eleifend
        tellus. Curabitur vel ullamcorper ex.
      </p>
      <TourismSwiper />
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70 z-0" />
    </div>
  );
};

export default TourismSection;
