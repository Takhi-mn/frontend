import { coll4, two } from "@/assets";
import Image from "next/image";
import React from "react";
import LearnMoreSection from "../components/learnMoreSection";

const NationalParkManagementPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-20 w-screen">
      <h1 className="text-[32px] text-center sm:text-[64px]">
        National Park Management
      </h1>
      <Image
        src={two.src}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction2"
        style={{
          width: "100%",
          maxWidth: "1000px",
          maxHeight: "566px",
          borderRadius: "8px",
          objectFit: "cover",
          right: "10%",
          bottom: "0",
        }}
      />
      <div className="flex flex-col justify-center items-center w-full gap-10 sm:flex-row-reverse sm:relative sm:justify-between sm:px-24">
        <Image
          src={two.src}
          width={0}
          height={0}
          sizes="100vw"
          alt="takhi-reintroduction2"
          style={{
            width: "100%",
            maxWidth: "693px",
            maxHeight: "506px",
            borderRadius: "8px",
            objectFit: "cover",
            right: "10%",
            bottom: "0",
          }}
        />
        <div className="w-full sm:absolute sm:max-w-[600px] sm:left-24 sm:p-8 sm:bg-white sm:bg-opacity-70 sm:rounded-[8px]">
          <p>
            Takhi or Przewalski’s horse has been reintroduced in Mongolia since
            1992. Currently, there are three locations where Takhi can be found
            – Hustai Nuruu, Takhiin Tal and Khomyn Tal. Today, population is
            counted over 900 in total, however, it is still insufficient to
            ensure for this species to survive in the wild. In Khomyn Tal, Takhi
            thrives in 14000 ha area fenced in 2003 for acclimatization and
            protection purposes. Mountainous range of Seeriin Nuruu also shelter
            Takhi in times of harsh weather. The number of Takhi has reached 100
            as of September 2020. In order not to exceed pasture capacity of the
            fenced area and allow the animals to get used to independently live
            in the wild, the horses are encouraged to roam freely outside the
            fence.
          </p>
        </div>
      </div>
      <LearnMoreSection />
    </div>
  );
};

export default NationalParkManagementPage;
