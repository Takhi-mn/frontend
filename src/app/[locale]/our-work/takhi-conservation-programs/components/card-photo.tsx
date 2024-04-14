import { five } from "@/assets";
import { contentConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const CardPhoto = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="w-full flex items-center relative flex-col-reverse sm:flex-row sm:justify-end">
      <div className="flex justify-center  items-center static sm:-mr-[200px] z-10 w-full sm:w-1/2 sm:bg-white sm:bg-opacity-60 rounded-lg sm:rounded-[50px] p-5">
        <p
          dangerouslySetInnerHTML={{
            __html: filteredData
              ? contentConverter(filteredData, selectedLanguage)
              : "",
          }}
        ></p>
      </div>
      <Image
        src={filteredData?.images[0].url}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction3211"
        className="w-full rounded-lg static sm:w-[65%] sm:right-0"
        style={{
          height: "506px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default CardPhoto;
