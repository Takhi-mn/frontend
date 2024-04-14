"use client";
import { nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const SectionHero = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <h1 className="text-[32px] text-center sm:text-[64px]">
        {nameConverter(filteredData, selectedLanguage)}
      </h1>
      <Image
        src={filteredData?.images[0].url}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction2"
        style={{
          width: "100%",
          maxWidth: "1000px",
          maxHeight: "566px",
          borderRadius: "8px",
          objectFit: "cover",
          right: "10%",
          bottom: "0",
        }}
      />
    </div>
  );
};

export default SectionHero;
