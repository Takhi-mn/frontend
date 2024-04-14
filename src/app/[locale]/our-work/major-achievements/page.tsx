import React from "react";
import LearnMoreSection from "../components/learnMoreSection";

const MajorAchievementsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full container gap-20">
      <h1 className="text-center text-[22px] font-medium w-full sm:text-[64px] sm:font-normal">
        MAJOR ACHIEVEMENTS
      </h1>
      <div className="gap-20 flex flex-col justify-center items-center sm:mx-[350px]">
        <h1 className="text-[22px] font-bold w-full text-left sm:text-[48px] sm:font-light">
          Since the reintroduction began, the following results have been
          achieved.
        </h1>
        <div className="text-left w-full">
          <li>
            Since first arrival of Takhi in Khomyn Tal in 2004, the population
            has quadrupled from  26  to over 100.
          </li>
          <li>
            The number of wild ungulates including the endangered Saiga,
            Mongolian gazelle, Black-tailed gazelle and Ibex has
            increased significantly in the years of protection.
          </li>
          <li>
            The overall ecosystem condition has greatly improved – the area
            occupied by wild sea buckthorn forests naturally growing along the
            Zavkhan river has extended from 100 to 1000 hectares by 2020. 
          </li>
          <li>
            Thanks to continuous cooperation with and involvement of local
            herders, local ownership of Takhi re-introduction program has
            increased, which results in the locals participation in conservation
            activities such as volunteer ranger patrolling, preserving riparian
            forests and information sharing.
          </li>
          <li>
            To secure enabling habitats of the future free roaming Takhi
            population in Khomyn Tal, the Government has established the Khomyn
            Tal National Park with total area of 411,403.80 hectares in May
            2020.
          </li>
        </div>
      </div>
      <LearnMoreSection />
    </div>
  );
};

export default MajorAchievementsPage;
