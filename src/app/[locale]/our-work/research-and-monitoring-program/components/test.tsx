import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { localSustainable } from "@/assets";

export function TestComp() {
  return (
    <Carousel className="w-full max-w-[1100px]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <div className="w-[700px] ml-60 items-center relative justify-end">
              <div className=" justify-center items-center absolute -left-[300px] z-10 w-[600px] bg-white bg-opacity-60 rounded-lg p-5">
                <h1 className="text-[48px] font-light">
                  Monitoring study of reintroduced Przewaslki’s horses (Takhi)
                </h1>
                <p>
                  Observation on behavior • Homerange and habitat use • Social
                  interactions • Health check/body conditionCollecting
                  photographs for Identification • Group changes • Genetic study
                  (paternity, inbreeding coefficient) • Disease control
                </p>
              </div>
              <Image
                src={localSustainable.src}
                width={0}
                height={0}
                sizes="100vw"
                alt="takhi-reintroduction3211"
                className="rounded-lg static w-[700px] h-[500px] sm:right-0"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
