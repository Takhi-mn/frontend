import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  donateText: string;
};

const UpperSection = ({ donateText }: Props) => {
  return (
    <div className="mb-14 hidden sm:flex flex-col gap-14">
      <section className="w-screen max-h-[300px] px-10 py-6 lg:p-16 lg:px-28 hidden sm:static lg:flex gap-10 text-white bg-workPageBackground bg-center bg-cover">
        <div className="flex-1 lg:w-full lg:h-full lg:flex flex-col justify-center">
          <h2 className="text-3xl lg:text-[64px] font-medium">Donation</h2>
          <p className="mt-10 text-lg font-light">
            Together, we can protect vulnerable wildlife, conserve vital
            habitats, and build a future where people live in harmony with
            nature. Give to Khomyn Tal National Park today and power our global
            conservation solutions. Your donation makes you a member a Partner
            in Conservation 
          </p>
        </div>
      </section>
    </div>
  );
};

export default UpperSection;
