"use client";
import { nameConverter } from "@/lib/nameConverter";
import { IPartner } from "@/types/backend";
import PhotoSliderPartners from "./photoSlider/photoSliderPartners";
import { dataContext } from "@/context/DataProvider";
import { useContext } from "react";

interface IProps {}

const PartnerSection = ({}: IProps) => {
  const { partners } = useContext(dataContext);
  const filteredData = partners
    ?.filter((data) => data.contenttype.name_en === "partners")
    ?.map((data) => data.images)
    .flat();

  console.log("FILTERED DATA PARTNERS", filteredData);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      {/* <h1 >
        {filteredData ? nameConverter(filteredData, selectedLanguage) : ""}
      </h1> */}
      {/* <div className="flex flex-wrap justify-center items-center">
        {partners
          ? partners[0].images.map((partner: any, index: any) => (
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
      </div> */}
      <div className="w-full flex flex-col justify-center items-center">
        <PhotoSliderPartners photos={filteredData} />
      </div>
    </div>
  );
};

export default PartnerSection;
