// "use client";
import Image from "next/image";
import React, { useContext } from "react";
import { location, sms, phone } from "@/assets";
import AboutUsSection from "./components/about-us-section";
import MissionSection from "./components/mission";
import GoalSection from "./components/goal-section";
import TakhiTeamSection from "./components/takhi-team-section";
import { PartnerSection } from "@/components";
import GoalAndMissionSection from "./components/goal-and-mission-section";
import ContactsSection from "@/components/contactSection/contactsSection";
import AboutUsPageComp from "./components/about-us-page";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsPageComp />
    </div>
  );
};

export default AboutUsPage;
