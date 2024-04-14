import React from "react";

import { nameConverter } from "@/lib/nameConverter";
import { IPartners } from "@/types/backend";
import Image from "next/image";

interface IProps {
  partners: IPartners[] | undefined;
  selectedLanguage: string | string[];
  filteredData: IPartners;
}

const PartnerSection = ({
  selectedLanguage,
  partners,
  filteredData,
}: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-[22px] sm:text-[45px] sm:font-medium">
        {filteredData ? nameConverter(filteredData, selectedLanguage) : ""}
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        {partners
          ? partners[0].images.map((partner, index) => (
              <div
                key={index}
                className="mx-4 my-2 w-32 h-32 relative sm:w-[200px] sm:h-[200px]"
              >
                <Image
                  key={index}
                  fill
                  alt={partner.url}
                  src={partner.url}
                  objectFit="contain"
                  className="grayscale"
                />
              </div>
            ))
          : "Loading"}
      </div>
    </div>
  );
};

export default PartnerSection;
