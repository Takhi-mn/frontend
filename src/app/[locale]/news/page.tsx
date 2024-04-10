import React, { useContext } from "react";
import NewsPageComp from "./NewsPageComp";

type Props = {};

const NewsPage = (props: Props) => {
  return (
    <div className="w-full p-6 sm:p-16 sm:px-28">
      <h1 className="text-5xl font-semibold ">News</h1>
      <NewsPageComp />
    </div>
  );
};

export default NewsPage;
