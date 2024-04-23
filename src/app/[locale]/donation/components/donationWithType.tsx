"use client";

import React, { useContext, useEffect, useState } from "react";
import Scroller from "./scroller";
import DonateWithMailSection from "./donateWithMailSection";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import SkeletonLoader from "@/components/skeleton";

const DonationWithType = () => {
  const [isClicked, setIsClicked] = useState("");
  const { getDonationType, donationType } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!donationType) {
      getDonationType();
    }
  });
  return (
    <>
      {donationType ? (
        <div className="flex flex-col sm:flex-row gap-10">
          <Scroller
            setIsClicked={setIsClicked}
            isClicked={isClicked}
            donationType={donationType}
            selectedLanguage={selectedLanguage}
          />
          <DonateWithMailSection
            isClicked={isClicked}
            donationType={donationType}
            setIsClicked={setIsClicked}
          />
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};

export default DonationWithType;
