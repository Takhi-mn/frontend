import { localSustainable } from "@/assets";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const MobileSection = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 lg:hidden">
      <Image
        className="w-full rounded-lg"
        src={filteredData?.images[0].url}
        alt="local sustainable"
        width={0}
        height={0}
        sizes="100vw"
      />

      <h1 className="font-light text-[24px]">
        {nameConverter(filteredData, selectedLanguage)}
      </h1>
      <p
        className="text-sm"
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></p>
    </div>
  );
};

export default MobileSection;
