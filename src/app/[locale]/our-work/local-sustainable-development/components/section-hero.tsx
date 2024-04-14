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
    <div className=" w-full flex flex-col justify-center items-center gap-6">
      <h1 className="text-[32px] w-full sm:text-[64px]">
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
          maxWidth: "1115px",
          maxHeight: "526px",
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
