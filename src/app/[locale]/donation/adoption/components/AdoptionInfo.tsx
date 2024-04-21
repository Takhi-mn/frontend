import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const AdoptionInfo = (props: Props) => {
  const a = useTranslations("Adoption");
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="font-medium text-xl">{a("title1")}</h1>
        <p>{a("text1")}</p>
      </div>
      <div>
        <h1 className="font-medium text-xl">{a("title2")}</h1>
        <p>{a("text2")}</p>
      </div>
      <div>
        <h1 className="font-medium text-xl">{a("title3")}</h1>
        <p>{a("text3")}</p>
      </div>
    </div>
  );
};

export default AdoptionInfo;
