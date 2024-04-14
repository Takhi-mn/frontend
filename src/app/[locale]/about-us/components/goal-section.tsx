import React from "react";

import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const GoalSection = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="flex flex-col gap-5 p-5 sm:flex-1 justify-center items-center ">
      <h1 className="text-lg text-primary text-center">
        {filteredData ? nameConverter(filteredData, selectedLanguage) : ""}
      </h1>
      <p
        className="text-[14px] "
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></p>
    </div>
  );
};

export default GoalSection;
