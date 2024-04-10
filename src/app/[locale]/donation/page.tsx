import DonateCard from "@/components/donateSection/DonateCard";
import { useTranslations } from "next-intl";
import React from "react";
import DonateWithMailSection from "./components/donateWithMailSection";
import Scroller from "./components/scroller";
import UpperSection from "./components/upperSection";

const DonationPage = () => {
  const t = useTranslations("Index");
  return (
    <div className="flex flex-col container justify-center items-center max-w-[1074px] mb-10">
      <UpperSection donateText={t("donateText")} />
      <div className="flex">
        <Scroller />
        <DonateWithMailSection
          donate={t("donate")}
          once={t("once")}
          monthly={t("monthly")}
        />
      </div>
    </div>
  );
};

export default DonationPage;
