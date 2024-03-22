"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { homePageText } from "@/data/ourwork";

const OurWorkPage = () => {
  const router = useRouter();
  return (
    <div className="bg-workPageBackground bg-cover w-screen h-screen flex flex-col justify-center items-center gap-32">
      <h1 className="font-bold text-5xl text-primary max-w-sm text-center">
        {homePageText.title}
      </h1>
      <h3 className="font-semibold text-white text-center text-3xl max-w-2xl">
        {homePageText.p}
      </h3>
      <h6 className=" text-lg text-primary">{homePageText.btn}</h6>
    </div>
  );
};

export default OurWorkPage;
