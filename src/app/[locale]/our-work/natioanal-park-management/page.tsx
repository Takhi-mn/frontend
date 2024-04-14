"use client";
import { coll4, two } from "@/assets";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import LearnMoreSection from "../components/learnMoreSection";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import SectionHero from "./components/section-hero";
import Section1 from "./components/section-1";

const NationalParkManagementPage = () => {
  const { getOurworks, ourworks } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!ourworks) {
      getOurworks();
    }
  });

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
            <Section1 selectedLanguage={selectedLanguage} filteredData={data} />
          ))}
      </div>
      <LearnMoreSection />
    </div>
  );
};

export default NationalParkManagementPage;
