import { nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import React from "react";

interface IProps {
  filteredData: IAboutUs;
  selectedLanguage: string | string[];
}

const LocationSection = ({ filteredData, selectedLanguage }: IProps) => {
  const handleDivClick = () => {
    window.open(
      "https://www.google.com/maps/dir/48.2095966,94.760817/47.7232453,95.0147531/@47.6009312,94.6181491,9.21z/data=!4m4!4m3!1m0!1m1!4e1?entry=ttu"
    );
  };
  return (
    <div
      className=" flex flex-col justify-center items-center bg-[#F9FAFB] hover:cursor-pointer rounded-2xl p-4 gap-2 w-full sm:max-w-[30%]"
      onClick={() => handleDivClick()}
    >
      <div className=" w-12 h-12 relative">
        <Image
          fill
          alt={"phone"}
          src={filteredData ? filteredData.images[0].url : ""}
          objectFit="location"
        />
      </div>
      <h3 className="text-[14px] text-center sm:text-[16px]">
        {filteredData ? nameConverter(filteredData, selectedLanguage) : ""}
      </h3>
    </div>
  );
};

export default LocationSection;
