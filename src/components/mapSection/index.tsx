import Image from "next/image";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { four, horseIcon } from "@/assets";
import { Card, CardContent, CardHeader } from "../ui/card";

const MapSection = () => {
  return (
    <div className="relative">
      <Image
        src={four.src}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction4"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
      <div className="absolute z-30 left-[220px] top-[19px]">
        <HoverCard>
          <HoverCardTrigger>
            <div className="bg-primary rounded-full">
              <Image
                src={horseIcon.src}
                width={0}
                height={0}
                sizes="100vw"
                alt="takhi-reintroduction4"
                style={{
                  width: "50px",
                  height: "auto",
                  color: "white",
                }}
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <Card>
              <CardHeader>
                <Image
                  src={horseIcon.src}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="takhi-reintroduction4"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </CardHeader>
              <CardContent>
                <p>
                  In Khomyn Tal, 14000 ha area was fenced in Seeriin Nuruu in
                  2003, to allow Takhi to acclimatize at the initial stages of
                  reintroduction. Mountainous range of Seeriin Nuruu also
                  shelters Takhi in times of harsh weather.
                </p>
              </CardContent>
            </Card>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default MapSection;
