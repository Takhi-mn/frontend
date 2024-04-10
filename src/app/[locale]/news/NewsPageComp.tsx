"use client";
import NewsCard from "@/components/newsSection/NewsCard";
import { useDataContext } from "@/context/DataProvider";
import React from "react";

type Props = {};

const NewsPageComp = (props: Props) => {
  const { allNews } = useDataContext();
  console.log("News In page", allNews);
  return (
    <div className="flex flex-wrap justify-center gap-5 my-20">
      {allNews?.map((news, idx) => {
        return <NewsCard key={news.id + idx} news={news} />;
      })}
    </div>
  );
};

export default NewsPageComp;
