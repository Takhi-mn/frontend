import OurWorkPageCard from "@/components/ourWorkSelector/ourWorkPageCard";
import { ourWorks } from "@/data/ourwork";
import React from "react";

const OurWorkSelector = () => {
  return (
    <div className="flex flex-wrap w-full justify-center gap-4 sm:grid sm:grid-cols-12 sm:grid-rows-12 sm:h-[714px] ">
      {ourWorks.map((ourwork, index) => (
        <OurWorkPageCard
          key={ourwork.url + index}
          data={ourwork}
          index={index}
        />
      ))}
    </div>
  );
};

export default OurWorkSelector;
