import { four, horseIcon, six } from "@/assets";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import React from "react";

const MapSection = () => {
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
            borderRadius: "64px",
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
      <p className="text-[14px] text-center">
        In Khomyn Tal, 14000 ha area was fenced in Seeriin Nuruu in 2003, to
        allow Takhi to acclimatize at the initial stages of reintroduction.
        Mountainous range of Seeriin Nuruu also shelters Takhi in times of harsh
        weather.
      </p>
    </div>
  );
};

export default MapSection;
