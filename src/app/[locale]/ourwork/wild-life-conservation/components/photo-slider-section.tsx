import PhotoSlider from "@/components/photoSlider";
import React from "react";

const PhotoSliderSection = ({ data }: any) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="font-semibold text-[22px]">{data.title}</h1>
      <PhotoSlider photos={data.images} />
      <p>{data.desc}</p>
    </div>
  );
};

export default PhotoSliderSection;
