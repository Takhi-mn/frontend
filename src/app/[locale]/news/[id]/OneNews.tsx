import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { INews } from "@/types/backend";
import Image from "next/image";
import React from "react";

type Props = {
  news: INews;
  selectedLanguage: string | string[];
};

const OneNews = ({ news, selectedLanguage }: Props) => {
  return (
    <div className="w-full pt-10">
      <div className="px-6 sm:px-28">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          {nameConverter(news, selectedLanguage)}
        </h1>
        <time>{news.createdAt}</time>
      </div>

      <div className="my-14">
        {news.images.length > 0 ? (
          <Image
            src={news?.images[0].url}
            className="w-full max-h-[700px] object-cover"
            width={1000}
            height={700}
            alt="News image"
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col items-center mb-16">
        <div
          className="px-6 sm:px-28 w-2/3"
          dangerouslySetInnerHTML={{
            __html: contentConverter(news, selectedLanguage),
          }}
        ></div>
      </div>
    </div>
  );
};

export default OneNews;