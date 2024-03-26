import OurWorkPageCard from "@/app/[locale]/ourwork/components/ourWorkPageCard";
import { ourWorks } from "@/data/ourwork";
import React from "react";

const OurWorkSelector = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 w-full h-[714px] justify-center gap-4">
      {ourWorks.map((ourwork, index) => (
        <OurWorkPageCard key={index} data={ourwork} index={index} />
      ))}
    </div>
  );
};

export default OurWorkSelector;
