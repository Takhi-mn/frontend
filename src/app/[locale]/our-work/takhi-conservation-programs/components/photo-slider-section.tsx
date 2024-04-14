import PhotoSlider from "@/components/photoSlider";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const PhotoSliderSection = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="font-semibold text-[22px]">
        {nameConverter(filteredData, selectedLanguage)}
      </h1>
      <PhotoSlider photos={filteredData?.images} />
      <p
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></p>
    </div>
  );
};

export default PhotoSliderSection;
