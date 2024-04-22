import { Metadata } from "next";
import { useTranslations } from "next-intl";

import NewsPageComp from "./NewsPageComp";

type Props = {};

export const metadata: Metadata = {
  title: "Takhi | News",
  description: "News related by takhi, takhi reintroduction, camp",
  keywords:
    "takhi, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski ",
};
const NewsPage = (props: Props) => {
  const I = useTranslations("Index");
  return (
    <div className="w-full p-6 sm:p-16 sm:px-28 bg-background text-foreground">
      <h1 className="text-5xl font-semibold ">{I("news")}</h1>
      <NewsPageComp />
    </div>
  );
};

export default NewsPage;
