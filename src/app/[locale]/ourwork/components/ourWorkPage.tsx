import { ourWorks } from "@/data/ourwork";
import React from "react";
import OurWorkPageCard from "./ourWorkPageCard";
import OurWorkSelector from "@/components/ourWorkSelector";

const OurWorkPage = () => {
  return (
    <div className="flex flex-col items-center container ">
      <h1 className="text-[64px] self-start">Our Works</h1>
      <OurWorkSelector />
    </div>
  );
};

export default OurWorkPage;
