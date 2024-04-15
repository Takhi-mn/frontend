"use client";
import Image from "next/image";
import React, { useState } from "react";

import { four } from "@/assets";
import HoverCardOne from "./HoverCardOne";
import HoverCardTwo from "./HoverCardTwo";
import HoverCardThird from "./HoverCardThird";

const MapSection = () => {
  const [mobileCard, setMobileCard] = useState(
    " In Khomyn Tal, 14000 ha area was fenced in Seeriin Nuruu in 2003, to allow Takhi to acclimatize at the initial stages of reintroduction. Mountainous range of Seeriin Nuruu also shelters Takhi in times of harsh weather."
  );
  const [selected, setSelected] = useState(1);
  const handleClick = (text: string, num: number) => {
    setMobileCard(text);
    setSelected(num);
  };
  return (
    <>
      <div className="relative">
        <Image
          src={four.src}
          width={800}
          height={550}
          alt="takhi-reintroduction4"
          className="w-full rounded-xl"
        />
        <div className="w-full h-full absolute bg-black z-10 bg-opacity-50 top-0 rounded-xl" />
        <HoverCardOne handleClick={handleClick} selected={selected} />
        <HoverCardTwo handleClick={handleClick} selected={selected} />
        <HoverCardThird handleClick={handleClick} selected={selected} />
      </div>
      <p className="mt-10 sm:hidden">{mobileCard}</p>
    </>
  );
};

export default MapSection;
