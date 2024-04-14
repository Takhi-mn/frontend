import React from "react";

import { Button } from "@/components/ui/button";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const TakhiTeamSection = ({ selectedLanguage, filteredData }: IProps) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5  sm:min-h-[319px] sm:text-white sm:gap-10 sm:relative">
      <div className="-z-10 absolute w-full h-full hidden sm:block">
        <Image
          alt="takhi-team-section"
          fill
          objectFit="cover"
          src={filteredData ? filteredData.images[0].url : ""}
        />
      </div>
      <h1 className="font-bold text-[22px] sm:text-[45px] sm:font-light">
        {filteredData ? nameConverter(filteredData, selectedLanguage) : ""}
      </h1>
      <p
        className="text-center text-lg sm:max-w-[50%]"
        dangerouslySetInnerHTML={{
          __html: filteredData
            ? contentConverter(filteredData, selectedLanguage)
            : "",
        }}
      ></p>
      <Button
        className="text-[14px] bg-primary"
        onClick={() => router.push("about-us/takhi-team")}
      >
        Дэлгэрэнгүй
      </Button>
    </div>
  );
};

export default TakhiTeamSection;
