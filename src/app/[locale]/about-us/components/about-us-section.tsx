import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const path = "/fr/about";

path.split("/").splice(0, 1);

const AboutUsSection = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full text-white h-[600px] bg-center gap-24 relative`}
    >
      <div className="-z-10 absolute w-full h-full">
        <Image
          alt="about-us-section"
          fill
          objectFit="cover"
          src={filteredData ? filteredData.images[0].url : ""}
          className=""
        />
      </div>
      <h1 className="text-[22px] font-bold sm:text-[40px] sm:font-semibold">
        {filteredData ? nameConverter(filteredData, selectedLanguage) : ""}
      </h1>
      <p
        className="text-[14px] text-center sm:text-[22px] sm:font-semibold sm:max-w-[60%]"
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></p>
    </div>
  );
};

export default AboutUsSection;
