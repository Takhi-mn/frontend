import NewsCard from "@/components/newsSection/NewsCard";
import React from "react";

type Props = {};

const NewsPage = (props: Props) => {
  return (
    <div className="w-full p-6 sm:p-16 sm:px-28">
      <h1 className="text-5xl font-semibold ">News</h1>
      <div className="flex flex-wrap justify-center gap-5 my-20">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default NewsPage;
