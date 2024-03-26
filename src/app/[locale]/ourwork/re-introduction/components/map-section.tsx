import { four, horseIcon, six } from "@/assets";
import MapSection from "@/components/mapSection";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import React from "react";

const MapRISection = () => {
  return (
    <div className="gap-[100px] w-full">
      <div className="flex">
        <h1 className="flex-1 text-[40px]">
          Takhi or Przewalski’s horse has been reintroduced in Mongolia since
          1992.
        </h1>
        <p className="flex-1 font-[22px]">
          Currently, there are three locations where Takhi can be found – Hustai
          National Park, Takhiin Tal in the Great Gobi Strictly Protected Area,
          part B and Khomyn Tal National Park. Today, population is counted over
          800 in total, however, it is still insufficient to ensure for this
          species to survive in the wild.
        </p>
      </div>
      <MapSection />
      <p className="text-[14px] text-center">
        In Khomyn Tal, 14000 ha area was fenced in Seeriin Nuruu in 2003, to
        allow Takhi to acclimatize at the initial stages of reintroduction.
        Mountainous range of Seeriin Nuruu also shelters Takhi in times of harsh
        weather.
      </p>
    </div>
  );
};

export default MapRISection;
