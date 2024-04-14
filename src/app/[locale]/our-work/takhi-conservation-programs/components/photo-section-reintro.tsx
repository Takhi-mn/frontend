import PhotoSlider from "@/components/photoSlider";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const PhotoSliderReIntro = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex gap-5">
        <h1 className="font-semibold text-[22px] flex-1 sm:text-[48px] sm:font-normal">
          {nameConverter(filteredData, selectedLanguage)}
        </h1>
        <p
          className="flex-1 sm:text-lg"
          dangerouslySetInnerHTML={{
            __html: filteredData
              ? contentConverter(filteredData, selectedLanguage)
              : "",
          }}
        ></p>
      </div>
      <PhotoSlider photos={filteredData?.images} />
    </div>
  );
};

export default PhotoSliderReIntro;
