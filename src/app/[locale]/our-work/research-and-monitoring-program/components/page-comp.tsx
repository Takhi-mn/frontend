"use client";
import { localSustainable } from "@/assets";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { SliderSectionResearch } from "./slider-section";
import MobileSection from "./mobile-section";
import HeroSection from "./heroSection";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import LearnMoreSection from "../../components/learnMoreSection";

const ResearchAndMonitoringProgram = () => {
  const { getOurworks, ourworks } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!ourworks) {
      getOurworks();
    }
  });
  const detector = ourworks?.filter(
    (data) =>
      data.name_en === "Research and monitoring program" &&
      data?.contenttype.name_en === "our-work-selector"
  );
  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="w-full">
        {ourworks
          ?.filter(
            (data) =>
              data.contenttype.name_en === "research-and-monitoring-program-1"
          )
          ?.map((data) => (
            <HeroSection
              key={data.id}
              selectedLanguage={selectedLanguage}
              filteredData={data}
            />
          ))}
      </div>

      <SliderSectionResearch
        selectedLanguage={selectedLanguage}
        ourworks={ourworks}
      />

      <div className="w-full flex flex-col gap-10">
        {ourworks
          ?.filter(
            (data) =>
              data.contenttype.name_en ===
              "research-and-monitoring-program-slider"
          )
          ?.map((data) => (
            <MobileSection
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

export default ResearchAndMonitoringProgram;
