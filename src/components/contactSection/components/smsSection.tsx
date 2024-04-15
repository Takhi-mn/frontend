import { nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import React from "react";

interface IProps {
  filteredData: IAboutUs;
  selectedLanguage: string | string[];
}

const SmsSection = ({ filteredData, selectedLanguage }: IProps) => {
  const handleDivClick = () => {
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=new");
  };
  return (
    <div
      className=" flex flex-col justify-center items-center bg-[#F9FAFB] hover:cursor-pointer rounded-2xl p-4 gap-2 w-full sm:max-w-[30%]"
      onClick={() => handleDivClick()}
    >
      <div className=" w-12 h-12 relative">
        <Image
          fill
          alt={"sms"}
          src={filteredData ? filteredData.images[0].url : ""}
          objectFit="contain"
        />
      </div>
      <h3 className="text-[14px] text-center sm:text-[16px]">
        {filteredData ? nameConverter(filteredData, selectedLanguage) : ""}
      </h3>
    </div>
  );
};

export default SmsSection;
