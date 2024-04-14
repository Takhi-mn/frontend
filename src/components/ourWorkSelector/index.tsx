"use client";
import OurWorkPageCard from "@/components/ourWorkSelector/ourWorkPageCard";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import { ourWorks } from "@/data/ourwork";
import React, { useContext, useEffect } from "react";

const OurWorkSelector = () => {
  const { getOurworks, ourworks } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!ourworks) {
      getOurworks();
    }
  });
  return (
    <div className="flex flex-wrap w-full justify-center gap-4 sm:grid sm:grid-cols-12 sm:grid-rows-12 sm:h-[714px] ">
      {ourworks
        ?.filter((data) => data.contenttype.name_en === "our-work-selector")
        ?.map((data, index) => (
          <OurWorkPageCard
            key={data.id}
            index={index}
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}
    </div>
  );
};

export default OurWorkSelector;
