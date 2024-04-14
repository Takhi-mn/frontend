"use client";
import { TourismContext } from "@/context/TourismProvider";
import React, { useContext, useEffect } from "react";
import CampSection1 from "./CampSection1";
import { useLanguage } from "@/context/LanguageProvider";
import CampSection2 from "./CampSection2";
import CampPageSkeleton from "./CampPageSkeleton";
import CampPageSections from "./CampPageSections";

type Props = {};

const CampPage = (props: Props) => {
  const { getTourismData, tourismData } = useContext(TourismContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    getTourismData();
  }, []);
  return (
    <div>
      {tourismData ? (
        <CampPageSections
          tourismData={tourismData}
          selectedLanguage={selectedLanguage}
        />
      ) : (
        <CampPageSkeleton />
      )}
    </div>
  );
};

export default CampPage;
