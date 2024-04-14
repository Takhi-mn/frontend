import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { four, horseIcon, majorAchievements } from "@/assets";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

type Props = {};

const HoverCardThird = (props: Props) => {
  return (
    <div className="absolute z-20 left-[18%] bottom-[33%]">
      <HoverCard>
        <HoverCardTrigger>
          <div className=" z-10 bg-primary rounded-full w-7 h-7 flex justify-center items-center">
            <Image
              src={horseIcon.src}
              width={17}
              height={17}
              alt="takhi-reintroduction4"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="p-0 rounded-xl">
          <Image
            className="w-full rounded-t-xl"
            src={majorAchievements.src}
            width={500}
            height={380}
            alt="Khomy tal"
          />
          <div className="p-4">
            <h1>Gobi B SPA</h1>
            <span>&#40;1,835,724 ha&#41;</span>
            <p>
              In Khomyn Tal, 14000 ha area was fenced in Seeriin Nuruu in 2003,
              to allow Takhi to acclimatize at the initial stages of
              reintroduction. Mountainous range of Seeriin Nuruu also shelters
              Takhi in times of harsh weather.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default HoverCardThird;
