import Image from "next/image";
import React from "react";

import { four } from "@/assets";
import HoverCardOne from "./HoverCardOne";
import HoverCardTwo from "./HoverCardTwo";
import HoverCardThird from "./HoverCardThird";

const MapSection = () => {
  return (
    <div className="relative">
      <Image
        src={four.src}
        width={800}
        height={550}
        alt="takhi-reintroduction4"
        className="w-full rounded-xl"
      />
      <HoverCardOne />
      <HoverCardTwo />
      <HoverCardThird />
    </div>
  );
};

export default MapSection;
