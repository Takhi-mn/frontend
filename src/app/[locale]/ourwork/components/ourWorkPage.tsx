"use client";

import { useRouter } from "next/navigation";
import React from "react";

const OurWorkPage = () => {
  const router = useRouter();
  return (
    <div className="bg-workPageBackground bg-cover w-screen h-screen flex flex-col justify-center items-center gap-32">
      <h1 className="font-bold text-5xl text-[#FFA45B] max-w-sm text-center">
        TAKHI REINTRODUCTION
      </h1>
      <h3 className="font-semibold text-center text-3xl text-white max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor
        nibh, aliquam id eros in, eleifend bibendum ex. Aenean quis eleifend
        tellus. Curabitur vel ullamcorper ex.
      </h3>
      <h6 className=" text-lg text-[#FFA45B]">Read More</h6>
    </div>
  );
};

export default OurWorkPage;
