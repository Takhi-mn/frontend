import React, { useContext } from "react";
import NewsPageComp from "./NewsPageComp";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Takhi | News",
  description: "News related by takhi, takhi reintroduction, camp",
  keywords:
    "takhi, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski ",
};
const NewsPage = (props: Props) => {
  return (
    <div className="w-full p-6 sm:p-16 sm:px-28">
      <h1 className="text-5xl font-semibold ">News</h1>
      <NewsPageComp />
    </div>
  );
};

export default NewsPage;
