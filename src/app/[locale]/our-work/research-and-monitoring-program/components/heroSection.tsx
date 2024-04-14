import { localSustainable } from "@/assets";
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
    <div className="flex flex-col w-full gap-10 justify-center items-center lg:items-start mb-20">
      <h1 className="text-[32px] lg:text-[64px] w-full ">
        {nameConverter(filteredData, selectedLanguage)}
      </h1>
      <Image
        src={localSustainable.src}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction2"
        style={{
          width: "100%",
          maxWidth: "100%",
          maxHeight: "566px",
          borderRadius: "8px",
          objectFit: "cover",
          right: "10%",
          bottom: "0",
        }}
      />
      <p
        className="font-light text-[24px] lg:font-normal lg:text-[40px] max-w-[550px]"
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
