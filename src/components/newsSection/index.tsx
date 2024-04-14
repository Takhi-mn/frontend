"use client";
import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { useDataContext } from "@/context/DataProvider";
import GetContents from "@/actions/getContents";
export const revalidate = 0;

type Props = {};
const NewsSection = (props: Props) => {
  const { homePageNews } = useDataContext();
  // const contents = await GetContents({
  //   isFeatured: true,
  //   taxonomyPath: "0007",
  // });
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {/* {contents?.map((news) => (
        <NewsCard news={news} />
      ))} */}
      {homePageNews?.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default NewsSection;
