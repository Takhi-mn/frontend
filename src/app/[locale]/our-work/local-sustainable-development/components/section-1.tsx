"use client";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import { contentConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import React from "react";

interface IProps {
  filteredData: IAboutUs;
  selectedLanguage: string | string[];
}

const Section1 = ({ filteredData, selectedLanguage }: IProps) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center  sm:flex-row-reverse sm:my-28">
      <p
        className="text-[14px] sm: flex-1 sm:text-base sm:min-w-[450px]"
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></p>
      {/* <div className="sm:max-w-[705px] overflow-hidden"> */}
      <PhotoSliderSmall photos={filteredData.images} />
      {/* </div> */}
    </div>
  );
};

export default Section1;
