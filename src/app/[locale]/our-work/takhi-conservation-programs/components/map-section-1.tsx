import { MapSection } from "@/components";
import { contentConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const MapRISection1 = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <>
      <MapSection />
      <p
        className="text-[12px] sm:text-[14px] text-center"
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></p>
    </>
  );
};

export default MapRISection1;
