import React from "react";
import NewsCard from "./NewsCard";

type Props = {};

const NewsSection = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-2 lg:justify-between justify-center">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default NewsSection;
