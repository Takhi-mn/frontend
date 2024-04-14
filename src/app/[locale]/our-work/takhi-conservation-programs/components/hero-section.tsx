import { map } from "@/assets";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const HeroSection = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="flex justify-between items-center gap-10 w-full flex-wrap">
      <Image
        src={map.src}
        width={0}
        height={0}
        sizes="100vw"
        alt={map.src}
        style={{
          borderRadius: "8px",
          objectFit: "cover",
          width: "100%",
          maxWidth: "700px",
          minHeight: "150px",
        }}
      />
      <h1 className=" min-w-[300px] text-[22px] max-w-[500px] font-semibold sm:text-[44px] sm:font-normal">
        {nameConverter(filteredData, selectedLanguage)}
      </h1>
      <p
        className="text-center text-lg"
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></p>
    </div>
  );
};

export default HeroSection;
