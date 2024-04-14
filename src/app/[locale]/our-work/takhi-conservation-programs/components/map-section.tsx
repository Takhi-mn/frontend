import { four, horseIcon, six } from "@/assets";
import MapSection from "@/components/mapSection";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const MapRISection = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <h1 className="flex-1 text-[22px] font-semibold sm:font-base sm:text-[40px]">
        {nameConverter(filteredData, selectedLanguage)}
      </h1>
      <p
        className="flex-1 text-[14px] sm:text-[22px]"
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></p>
    </div>
  );
};

export default MapRISection;
