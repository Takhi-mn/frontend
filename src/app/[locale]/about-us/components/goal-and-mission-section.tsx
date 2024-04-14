import React from "react";

import { nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const GoalAndMissionSection = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <h1 className="font-bold text-[22px] text-center sm:text-[45px] sm:font-light sm:max-w-[500px]">
        {filteredData ? nameConverter(filteredData, selectedLanguage) : ""}
      </h1>
    </div>
  );
};

export default GoalAndMissionSection;
