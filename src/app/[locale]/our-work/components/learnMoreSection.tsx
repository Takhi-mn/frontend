"use client";
import { coll4 } from "@/assets";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import { nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

interface IProps {
  detector: IAboutUs | null;
}

const LearnMoreSection = ({ detector }: IProps) => {
  const { getOurworks, ourworks } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  const router = useRouter();
  useEffect(() => {
    if (!ourworks) {
      getOurworks();
    }
  });
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="font-semibold text-[22px] text-center sm:text-[40px] sm:font-normal">
        Learn more about our work
      </h1>
      <div className="w-full flex gap-5 flex-wrap justify-center mb-10">
        {ourworks
          ?.filter((data) => data.contenttype.name_en === "our-work-selector")
          .filter((data) => data.id !== detector?.id)
          ?.map((filteredData, index) => (
            <div
              key={filteredData.id}
              className={`relative w-[400px] min-h-44 group overflow-hidden flex`}
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
          ))}
      </div>
    </div>
  );
};

export default LearnMoreSection;

<Image
  src={coll4.src}
  width={0}
  height={0}
  sizes="100vw"
  alt="takhi-reintroduction2"
  style={{
    width: "30%",
    minWidth: "300px",
    height: "240px",
    borderRadius: "8px",
    objectFit: "cover",
    right: "10%",
    bottom: "0",
  }}
/>;
