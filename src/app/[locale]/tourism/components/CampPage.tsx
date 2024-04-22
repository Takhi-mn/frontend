"use client";
import { useContext, useEffect } from "react";

import { TourismContext } from "@/context/TourismProvider";
import { useLanguage } from "@/context/LanguageProvider";
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
