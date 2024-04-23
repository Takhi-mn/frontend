"use client";
import OurWorkPageCard from "@/components/ourWorkSelector/ourWorkPageCard";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";

import { useContext, useEffect } from "react";
import SkeletonLoader from "../skeleton";

const OurWorkSelector = () => {
  const { getOurworks, ourworks } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    getOurworks();
  }, []);
  return (
    <>
      {ourworks ? (
        <div className="flex flex-col gap-1 w-full ">
          <div className="flex flex-wrap w-full justify-center gap-1 sm:grid sm:grid-cols-12 sm:grid-rows-7 sm:h-[420px] ">
            {ourworks
              ?.filter(
                (data) => data.contenttype.name_en === "our-work-selector"
              )
              .slice(0, 4)
              ?.map((data, index) => (
                <OurWorkPageCard
                  key={data.id}
                  index={index}
                  selectedLanguage={selectedLanguage}
                  filteredData={data}
                />
              ))}
          </div>
          <div className="flex flex-wrap w-full justify-center gap-1 sm:-mt-[60px]">
            {ourworks
              ?.filter(
                (data) => data.contenttype.name_en === "our-work-selector"
              )
              .slice(4, 8)
              ?.map((data, index) => (
                <OurWorkPageCard
                  flexer="flex"
                  key={data.id}
                  index={index}
                  selectedLanguage={selectedLanguage}
                  filteredData={data}
                />
              ))}
          </div>
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};

export default OurWorkSelector;
