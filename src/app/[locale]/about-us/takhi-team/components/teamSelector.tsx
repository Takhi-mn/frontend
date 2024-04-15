import { managementTeam } from "@/assets";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import { nameConverter } from "@/lib/nameConverter";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

interface IProps {
  setFilterText: any;
}

const TeamSelectorSection = ({ setFilterText }: IProps) => {
  const { departments, getDepartments } = useContext(dataContext);

  useEffect(() => {
    if (!departments) {
      getDepartments();
    }
  }, []);

  const { selectedLanguage } = useLanguage();

  return (
    <div className="w-full">
      <div className="w-full h-[200px] relative overflow-hidden sm:h-[471px]">
        <Image
          fill
          alt={"department employees"}
          src={managementTeam.src}
          objectFit="cover"
          style={{ scale: "1.5", left: "10%" }}
        />
      </div>
      <div className="w-full">
        <div className="w-full mt-[50px] flex ">
          <div className="w-full flex flex-col justify-center items-center sm:flex-row">
            {departments?.map((data) => (
              <h1
                key={data.id}
                className="py-[31px] w-full border text-center sm:max-w-[33.33333333%]"
                onClick={() => {
                  setFilterText(data?.name_en);
                }}
              >
                {nameConverter(data, selectedLanguage)}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSelectorSection;
