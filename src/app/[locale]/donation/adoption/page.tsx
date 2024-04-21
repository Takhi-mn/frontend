import React from "react";
import { useTranslations } from "next-intl";
import AdoptionPage from "./components/adoptPage";
import AdoptionInfo from "./components/AdoptionInfo";

type Props = {};

const page = (props: Props) => {
  const t = useTranslations("Index");
  return (
    <div className="container mb-20">
      <AdoptionPage donateText={t("donateText")} />
      <AdoptionInfo />
    </div>
  );
};

export default page;
