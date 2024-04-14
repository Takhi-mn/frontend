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
import { IAboutUs } from "@/types/backend";
import { contentConverter, nameConverter } from "@/lib/nameConverter";

interface IProps {
  selectedLanguage: string | string[];
  ourworks: IAboutUs[] | undefined;
}

export function SliderSectionResearch({ selectedLanguage, ourworks }: IProps) {
  return (
    <Carousel className="w-full max-w-[1000px] h-[600px] hidden lg:flex lg:flex-col">
      <CarouselContent>
        {ourworks
          ?.filter(
            (data) =>
              data?.contenttype.name_en ===
              "research-and-monitoring-program-slider"
          )
          ?.map((filteredData, index) => (
            <CarouselItem key={index} className="flex justify-center h-[500px]">
              <div className="p-1">
                <div className="w-[600px] h-[400px] ml-72 items-center relative justify-end p-6">
                  <div className="flex flex-col justify-center absolute -left-[300px] gap-5 top-[80px] z-10 w-[600px] bg-white bg-opacity-60 rounded-lg p-5">
                    <h1 className="text-[32px] font-light">
                      {nameConverter(filteredData, selectedLanguage)}
                    </h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: filteredData
                          ? contentConverter(filteredData, selectedLanguage)
                          : "",
                      }}
                    ></p>
                  </div>
                  <Image
                    src={filteredData?.images[0].url}
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
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <div>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
