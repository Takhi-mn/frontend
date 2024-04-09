"use client";
import React from "react";
import NewsCard from "./NewsCard";
import { useDataContext } from "@/context/DataProvider";

type Props = {};

const NewsSection = (props: Props) => {
  const { homePageNews } = useDataContext();
  return (
    <div className="flex flex-wrap gap-2 lg:justify-between justify-center">
      {homePageNews?.map((news) => (
        <NewsCard news={news} />
      ))}
    </div>
  );
};

export default NewsSection;
