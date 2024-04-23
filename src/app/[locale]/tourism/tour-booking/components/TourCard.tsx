import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { INews } from "@/types/backend";
import Link from "next/link";
import React from "react";

const TourCard = ({
  tourism,
  selectedLanguage,
}: {
  tourism: INews;
  selectedLanguage: string | string[];
}) => {
  return (
    <Link rel="Takhi tour" href={`/${selectedLanguage}/tourism/${tourism.id}`}>
      <div className="relative rounded-sm shadow-lg max-w-[350px] h-[220px] md:max-w-[400px] md:h-[300px] text-white group md:overflow-hidden cursor-pointer transition-all ease-in-out duration-300">
        <div
          className="absolute w-full h-full bg-gradient-to-b
       from-orange-700 opacity-50 md:opacity-0 
       group-hover:opacity-50 
       transition-all ease-in-out duration-300"
        />
        <img
          className="w-[350px] h-[220px] md:w-[450px] md:h-[300px] object-cover"
          src={tourism?.images[0].url}
          alt=""
        />
        <div className="absolute top-1/3 md:top-[80%] w-[310px] md:w-[380px] md:group-hover:-translate-y-32 transition-all ease-in-out duration-300 transform p-5">
          <h3 className="">{nameConverter(tourism, selectedLanguage)}</h3>
          <p
            className="line-clamp-2 mt-5"
            dangerouslySetInnerHTML={{
              __html: contentConverter(tourism, selectedLanguage),
            }}
          ></p>
          <p className="text-right font-medium">Дэлгэрэнгүй</p>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
