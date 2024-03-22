import { coll1, coll2, coll3, coll4 } from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const PhotoSliderSection = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex">
        <h1 className="text-5xl flex-1">
          Takhi reintroduction is not limited only to transporting and releasing
          the previously captive animals into the wild.{" "}
        </h1>
        <p className="text-[18px] flex-1">
          Reintroduction work requires daily observation, monitoring and
          research, and overall management based on findings. Census and daily
          observation have been conducted continuously since the first day of
          Takhi arrival. Rangers have accumulated an extensive database on Takhi
          herd structure, reproduction ecology, health condition, habitat
          utilization, seasonal movements and migration, as well as internal
          relations between individual animals in the herd and 29 behavioral
          traits identified in the Takhi behavior. In addition, rangers are
          responsible for maintaining the fence and daily patrolling to ensure
          no livestock enters the reintroduction area.  The information
          collected in this way is compiled for analysis and becomes a sound
          justification for reintroduction management. 
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Carousel className="w-full ">
          <CarouselContent className="w-[]">
            <Image
              src={coll1.src}
              width={0}
              height={0}
              sizes="100vw"
              alt="takhi-reintroduction1"
              style={{
                width: "100%",
                height: "450px",
                borderRadius: "6px",

                zIndex: 50,
                objectFit: "cover",
              }}
            />
            <Image
              src={coll2.src}
              width={0}
              height={0}
              sizes="100vw"
              alt="takhi-reintroduction1"
              style={{
                width: "100%",
                height: "450px",
                borderRadius: "6px",

                zIndex: 50,
                objectFit: "cover",
              }}
            />
            <Image
              src={coll3.src}
              width={0}
              height={0}
              sizes="100vw"
              alt="takhi-reintroduction1"
              style={{
                width: "100%",
                height: "450px",
                borderRadius: "6px",

                zIndex: 50,
                objectFit: "cover",
              }}
            />
            <Image
              src={coll4.src}
              width={0}
              height={0}
              sizes="100vw"
              alt="takhi-reintroduction1"
              style={{
                width: "100%",
                height: "450px",
                borderRadius: "6px",

                zIndex: 50,
                objectFit: "cover",
              }}
            />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default PhotoSliderSection;
