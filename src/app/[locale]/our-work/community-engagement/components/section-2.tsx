"use client";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import React from "react";

interface IProps {
  filteredData: IAboutUs;
  selectedLanguage: string | string[];
}

const Section2 = ({ filteredData, selectedLanguage }: IProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center sm:flex-row-reverse">
      <div className="flex flex-col w-full sm:max-w-[705px]">
        <h1 className="font-bold sm:text-lg sm:text-right">
          {nameConverter(filteredData, selectedLanguage)}
        </h1>
        {/* <div className="sm:max-w-[705px] overflow-hidden"> */}
        <PhotoSliderSmall photos={filteredData.images} />
        {/* </div> */}
      </div>
      <p
        className=" text-[14px] sm:text-base sm:min-w-[450px]"
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></p>
    </div>
  );
};

export default Section2;
