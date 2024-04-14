"use client";
import { coll1, coll2, coll3, coll4, one, two } from "@/assets";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import LearnMoreSection from "../components/learnMoreSection";
import Section1 from "./components/section-1";
import Section2 from "./components/section-2";
import Section3 from "./components/section-3";
import Section4 from "./components/section-4";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import SectionHero from "./components/section-hero";

const LocalSustainableDevelopmentPage = () => {
  const { getOurworks, ourworks } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!ourworks) {
      getOurworks();
    }
  });

  return (
    <div className="container flex flex-col justify-center items-center w-screen gap-5 sm:gap-20">
      {ourworks
        ?.filter(
          (data) => data.contenttype.name_en === "community-engagement-hero"
        )
        ?.map((data) => (
          <SectionHero
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}

      {ourworks
        ?.filter(
          (data) => data.contenttype.name_en === "community-engagement-1"
        )
        ?.map((data) => (
          <Section1 selectedLanguage={selectedLanguage} filteredData={data} />
        ))}
      {ourworks
        ?.filter(
          (data) => data.contenttype.name_en === "community-engagement-2"
        )
        ?.map((data) => (
          <Section2 selectedLanguage={selectedLanguage} filteredData={data} />
        ))}
      {ourworks
        ?.filter(
          (data) => data.contenttype.name_en === "community-engagement-3"
        )
        ?.map((data) => (
          <Section3 selectedLanguage={selectedLanguage} filteredData={data} />
        ))}
      {ourworks
        ?.filter(
          (data) => data.contenttype.name_en === "community-engagement-4"
        )
        ?.map((data) => (
          <Section4 selectedLanguage={selectedLanguage} filteredData={data} />
        ))}

      <LearnMoreSection />
    </div>
  );
};

export default LocalSustainableDevelopmentPage;
