import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Takhi | Shop",
  description: "Gift shop, mongolian traditionals",
  keywords:
    "takhi, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, photos, nature photo, mongolian traditional shop, gift shop, gift shop mongolia, takhi shop, ",
};

const ShopHeader = (props: Props) => {
  const I = useTranslations("Index");
  return (
    <div className="w-full relative bg-workPageBackground h-28 md:h-60 p-5 bg-center bg-cover">
      <h1 className="text-white text-4xl md:text-7xl">{I("shop")}</h1>
    </div>
  );
};

export default ShopHeader;
