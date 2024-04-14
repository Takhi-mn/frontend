"use client";
import { coll1, coll2, coll3, coll4, one, two } from "@/assets";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import LearnMoreSection from "../../components/learnMoreSection";
import Section1 from "./section-1";
import Section2 from "./section-2";
import Section3 from "./section-3";
import Section4 from "./section-4";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import SectionHero from "./section-hero";

const CommunityEngagement = () => {
  const { getOurworks, ourworks } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!ourworks) {
      getOurworks();
    }
  });
  const detector = ourworks?.filter(
    (data) =>
      data?.name_en === "Community Engagement" &&
      data?.contenttype.name_en === "our-work-selector"
  );

  return (
    <div className="container flex flex-col justify-center items-center w-screen gap-5 sm:gap-20">
      {ourworks
        ?.filter(
          (data) => data.contenttype.name_en === "community-engagement-hero"
        )
        ?.map((data) => (
          <SectionHero
            key={data.id}
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}

      {ourworks
        ?.filter(
          (data) => data.contenttype.name_en === "community-engagement-1"
        )
        ?.map((data) => (
          <Section1
            key={data.id}
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}
      {ourworks
        ?.filter(
          (data) => data.contenttype.name_en === "community-engagement-2"
        )
        ?.map((data) => (
          <Section2
            key={data.id}
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}
      {ourworks
        ?.filter(
          (data) => data.contenttype.name_en === "community-engagement-3"
        )
        ?.map((data) => (
          <Section3
            key={data.id}
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}
      {ourworks
        ?.filter(
          (data) => data.contenttype.name_en === "community-engagement-4"
        )
        ?.map((data) => (
          <Section4
            key={data.id}
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}

      <LearnMoreSection detector={detector ? detector[0] : null} />
    </div>
  );
};

export default CommunityEngagement;
