"use client";

import React, { useContext, useEffect } from "react";
import LearnMoreSection from "../../components/learnMoreSection";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import SectionHero from "./section-hero";
import Section1 from "./section-1";

const NationalParkManagement = () => {
  const { getOurworks, ourworks } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!ourworks) {
      getOurworks();
    }
  });
  const detector = ourworks?.filter(
    (data) =>
      data.name_en === "National Park Management" &&
      data?.contenttype.name_en === "our-work-selector"
  );

  return (
    <div className="container flex flex-col items-center justify-center gap-20 w-screen">
      <div className="w-full">
        {ourworks
          ?.filter(
            (data) =>
              data.contenttype.name_en === "national-park-management-hero"
          )
          ?.map((data) => (
            <SectionHero
              key={data.id}
              selectedLanguage={selectedLanguage}
              filteredData={data}
            />
          ))}
      </div>
      <div className="w-full">
        {ourworks
          ?.filter(
            (data) => data.contenttype.name_en === "national-park-management-1"
          )
          ?.map((data) => (
            <Section1
              key={data.id}
              selectedLanguage={selectedLanguage}
              filteredData={data}
            />
          ))}
      </div>
      <LearnMoreSection detector={detector ? detector[0] : null} />
    </div>
  );
};

export default NationalParkManagement;
