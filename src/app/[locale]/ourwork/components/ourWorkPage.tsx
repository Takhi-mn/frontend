import { ourWorks } from "@/data/ourwork";
import React from "react";
import OurWorkPageCard from "./ourWorkPageCard";

const OurWorkPage = () => {
  return (
    <div className="flex flex-col items-center container ">
      <h1 className="text-[64px] self-start">Our Works</h1>
      <div className="grid grid-cols-12 grid-rows-12 w-full h-[714px] justify-center gap-4">
        {ourWorks.map((ourwork, index) => (
          <OurWorkPageCard key={index} data={ourwork} index={index} />
        ))}
      </div>
    </div>
  );
};

export default OurWorkPage;
