"use client";

import React, { useContext } from "react";
import AboutUsSection from "./about-us-section";
import GoalAndMissionSection from "./goal-and-mission-section";
import MissionSection from "./mission";
import GoalSection from "./goal-section";
import TakhiTeamSection from "./takhi-team-section";
import { PartnerSection } from "@/components";
import ContactsSection from "@/components/contactSection/contactsSection";
import { useLanguage } from "@/context/LanguageProvider";
import { dataContext } from "@/context/DataProvider";

const AboutUsPageComp = () => {
  const { selectedLanguage } = useLanguage();
  const { aboutUs } = useContext(dataContext);
  const { partners } = useContext(dataContext);
  const { contacts } = useContext(dataContext);

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 mb-20">
      {aboutUs
        ?.filter((data) => data.contenttype.name_en === "about-us-section")
        ?.map((data) => (
          <AboutUsSection
            key={data.id}
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}
      {aboutUs
        ?.filter((data) => data.contenttype.name_en === "goal-and-mission")
        ?.map((data) => (
          <GoalAndMissionSection
            key={data.id}
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}

      <div className="flex flex-col justify-center items-center gap-8 sm:flex-row sm:max-w-[80%]">
        <div className="flex-1">
          {aboutUs
            ?.filter((data) => data.contenttype.name_en === "mission")
            ?.map((data) => (
              <MissionSection
                key={data.id}
                selectedLanguage={selectedLanguage}
                filteredData={data}
              />
            ))}
        </div>
        <div className="flex-1">
          {aboutUs
            ?.filter((data) => data.contenttype.name_en === "goal")
            ?.map((data) => (
              <GoalSection
                key={data.id}
                selectedLanguage={selectedLanguage}
                filteredData={data}
              />
            ))}
        </div>
      </div>
      {aboutUs
        ?.filter((data) => data.contenttype.name_en === "takhi-team")
        ?.map((data) => (
          <TakhiTeamSection
            key={data.id}
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}
      {partners
        ?.filter((data) => data.contenttype.name_en === "partners")
        ?.map((data) => (
          <PartnerSection
            key={data.id}
            partners={partners}
            selectedLanguage={selectedLanguage}
            filteredData={data}
          />
        ))}

      <ContactsSection
        contacts={contacts}
        selectedLanguage={selectedLanguage}
      />
    </div>
  );
};

export default AboutUsPageComp;
