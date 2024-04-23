"use client";

import { one, three, two } from "@/assets";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const IntroSection = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="relative w-full h-[550px] z-30 flex flex-col ">
      <h1 className="text-[24px] font-semibold sm:text-5xl sm:font-normal my-[30px]">
        {nameConverter(filteredData, selectedLanguage)}
      </h1>
      <Image
        src={filteredData?.images[1].url}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction1"
        style={{
          width: "100%",
          height: "450px",
          borderRadius: "6px",
          zIndex: 50,
          objectFit: "cover",
        }}
      />
      <Image
        src={filteredData?.images[0].url}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction2"
        className="absolute w-1/2 h-[150px] bottom-[140px] right-0 sm:right-[10%] sm:w-1/4 sm:-bottom-[100px] sm:h-[200px]"
        style={{
          borderRadius: "8px",
          zIndex: 60,
          objectFit: "cover",
        }}
      />
      <Image
        src={filteredData?.images[2].url}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction3"
        className="w-full self-end mt-10 sm:w-1/4 sm:h-[60px] mb-10"
        style={{
          borderRadius: "16px",
          zIndex: 60,
          objectFit: "cover",
        }}
      />
      <h6
        className=" sm:w-[60%] bottom-0"
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></h6>
    </div>
  );
};

export default IntroSection;
