import React from "react";
import NewsCard from "./NewsCard";

type Props = {};

const NewsSection = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-2 justify-between">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default NewsSection;
