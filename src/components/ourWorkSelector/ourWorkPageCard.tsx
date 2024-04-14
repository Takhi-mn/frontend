"use client";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import "./style.css";
import { useRouter } from "next/navigation";
import { IAboutUs } from "@/types/backend";
import { nameConverter } from "@/lib/nameConverter";
interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
  index: number;
}

const OurWorkPageCard = ({ filteredData, selectedLanguage, index }: IProps) => {
  const router = useRouter();
  // url: "/ourwork/reintroduction",
  return (
    <div
      className={`${
        "s" + index
      } relative w-full min-h-44 group overflow-hidden`}
      onClick={() =>
        router.push(
          `/${selectedLanguage}/our-work/${filteredData.name_en
            .replace(/\s/g, "-")
            .toLowerCase()}`
        )
      }
    >
      <Image
        src={filteredData?.images[0].url}
        className="transform duration-700 transition-all group-hover:scale-125"
        fill
        alt={filteredData?.images[0].url}
        style={{ borderRadius: "8px", objectFit: "cover" }}
      />

      <h1 className="font-bold text-lg absolute text-white z-10 bottom-5 left-5 duration-700 transform transition-all group-hover:bg-black group-hover:bg-opacity-30 px-1 py-2 group-hover:rounded-md">
        {nameConverter(filteredData, selectedLanguage)}
      </h1>
    </div>
  );
};

export default OurWorkPageCard;
