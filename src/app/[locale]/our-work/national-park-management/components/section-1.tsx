"use client";
import { contentConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const Section1 = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 sm:flex-row-reverse sm:relative sm:justify-between sm:px-24">
      <Image
        src={filteredData?.images[0].url}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction2"
        style={{
          width: "100%",
          minWidth: "350px",
          minHeight: "262px",
          maxWidth: "693px",
          maxHeight: "506px",
          borderRadius: "8px",
          objectFit: "cover",
          right: "10%",
          bottom: "0",
        }}
      />
      <div className="w-full sm:absolute sm:max-w-[600px] sm:left-24 sm:p-8 sm:bg-white sm:bg-opacity-70 sm:rounded-[8px]">
        <p
          dangerouslySetInnerHTML={{
            __html: filteredData
              ? contentConverter(filteredData, selectedLanguage)
              : "",
          }}
        ></p>
      </div>
    </div>
  );
};

export default Section1;
