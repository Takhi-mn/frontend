"use client";
import React, { useContext, useEffect } from "react";
import IntroSection from "./intro-section";
import PhotoSliderSection from "./photo-slider-section";
import CardPhoto from "./card-photo";
import HeroSection from "./hero-section";
import LearnMoreSection from "../../components/learnMoreSection";
import { coll1, coll2, coll3, coll4, map } from "@/assets";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import MapRISection from "./map-section";
import MapRISection1 from "./map-section-1";
import PhotoSliderReIntro from "./photo-section-reintro";
import SkeletonLoader from "@/components/skeleton";

const TakhiConservationPrograms = () => {
  const { getOurworks, ourworks } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!ourworks) {
      getOurworks();
    }
  });
  const detector = ourworks?.filter(
    (data) =>
      data.name_en === "Takhi Conservation Programs" &&
      data?.contenttype.name_en === "our-work-selector"
  );

  return (
    <>
      {ourworks ? (
        <div className="flex flex-col w-full container items-center gap-20">
          <div className="flex flex-col w-full items-center gap-20 ">
            <div className="w-full">
              <h1 className="text-[30px] font-semibold sm:text-6xl sm:font-normal">
                Community Engagement
              </h1>
              {ourworks
                ?.filter(
                  (data) =>
                    data.contenttype.name_en ===
                    "takhi-conservation-programs-intro"
                )
                ?.map((data) => (
                  <IntroSection
                    key={data.id}
                    selectedLanguage={selectedLanguage}
                    filteredData={data}
                  />
                ))}
            </div>
            <div className="w-full flex flex-col gap-10 mt-20 sm:mt-32">
              {ourworks
                ?.filter(
                  (data) =>
                    data.contenttype.name_en ===
                    "takhi-conservation-programs-map-1"
                )
                ?.map((data) => (
                  <MapRISection
                    key={data.id}
                    selectedLanguage={selectedLanguage}
                    filteredData={data}
                  />
                ))}
              {ourworks
                ?.filter(
                  (data) =>
                    data.contenttype.name_en ===
                    "takhi-conservation-programs-map-2"
                )
                ?.map((data) => (
                  <MapRISection1
                    key={data.id}
                    selectedLanguage={selectedLanguage}
                    filteredData={data}
                  />
                ))}
            </div>

            {/* <GraphDataSection /> */}
            <div className="w-full flex flex-col gap-10">
              {ourworks
                ?.filter(
                  (data) =>
                    data.contenttype.name_en ===
                    "takhi-conservation-programs-slider-1"
                )
                ?.map((data) => (
                  <PhotoSliderReIntro
                    key={data.id}
                    selectedLanguage={selectedLanguage}
                    filteredData={data}
                  />
                ))}
            </div>
            <div className="w-full flex flex-col gap-20">
              {ourworks
                ?.filter(
                  (data) =>
                    data.contenttype.name_en ===
                    "takhi-conservation-programs-cardphoto"
                )
                ?.map((data) => (
                  <CardPhoto
                    key={data.id}
                    selectedLanguage={selectedLanguage}
                    filteredData={data}
                  />
                ))}
            </div>
          </div>
          <div className="flex flex-col justify-center w-full items-center container gap-10 ">
            <h1 className="text-[24px] font-semibold sm:text-5xl sm:font-normal my-[30px]">
              Wildlife Conservation
            </h1>
            <div className="w-full flex flex-col gap-20">
              {ourworks
                ?.filter(
                  (data) =>
                    data.contenttype.name_en ===
                    "takhi-conservation-programs-intro-2"
                )
                ?.map((data) => (
                  <HeroSection
                    key={data.id}
                    selectedLanguage={selectedLanguage}
                    filteredData={data}
                  />
                ))}
            </div>
            <div className="w-full flex flex-col gap-20">
              {ourworks
                ?.filter(
                  (data) =>
                    data.contenttype.name_en ===
                    "takhi-conservation-programs-slider-2"
                )
                ?.map((data) => (
                  <PhotoSliderSection
                    key={data.id}
                    selectedLanguage={selectedLanguage}
                    filteredData={data}
                  />
                ))}
            </div>

            <LearnMoreSection detector={detector ? detector[0] : null} />
          </div>
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};

export default TakhiConservationPrograms;
