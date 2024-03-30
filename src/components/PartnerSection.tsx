import { partners } from "@/data";
import { SectionWrapper } from "@/hoc";
import React from "react";

type Props = {};

const PartnerSection = (props: Props) => {
  return (
    <div className="w-full max-w-7xl">
      <h2 className="text-4xl text-center ">OUR PARTNERS AND SUPPORTERS</h2>
      <div className="flex flex-wrap gap-10 mt-20 justify-center md:justify-between">
        {partners.map((partner, index) => (
          <div
            key={partner.name + index}
            className="bg-zinc-100 rounded-xl w-48 h-40 flex items-center justify-center"
          >
            <img
              className="filter grayscale"
              src={partner.partner.src}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
