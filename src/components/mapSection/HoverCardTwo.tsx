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

const HoverCardTwo = ({
  handleClick,
  selected,
}: {
  handleClick: (text: string, num: number) => void;
  selected: number;
}) => {
  return (
    <div className="absolute z-20 top-[40%] right-[43%]">
      <HoverCard>
        <HoverCardTrigger
          onClick={() => {
            handleClick(
              " In Hustai nuruu, 14000 ha area was fenced in Seeriin Nuruu in 2003, to allow Takhi to acclimatize at the initial stages of reintroduction. Mountainous range of Seeriin Nuruu also shelters Takhi in times of harsh weather.",
              2
            );
          }}
        >
          <div
            className={` ${
              selected === 2 && " scale-150 sm:scale-100"
            } bg-primary z-10 rounded-full w-6 h-6 sm:w-12 sm:h-12 flex justify-center items-center`}
          >
            <Image
              src={horseIcon.src}
              width={30}
              height={30}
              alt="takhi-reintroduction4"
              className="w-2/3"
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
            <h1>Hustai NP</h1>
            <span>&#40;48,400 ha&#41;</span>
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

export default HoverCardTwo;
