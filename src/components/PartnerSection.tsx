import { partners } from "@/data";
import { SectionWrapper } from "@/hoc";
import React from "react";

type Props = {};

const PartnerSection = (props: Props) => {
  return (
    <div className="w-full max-w-7xl">
      <h2 className="text-4xl text-center ">OUR PARTNERS AND SUPPORTERS</h2>
      <div className="flex flex-wrap gap-12 mt-20 justify-center">
        {partners.map((partner) => (
          <div className="bg-black w-60 h-52"></div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(PartnerSection, "partners");
