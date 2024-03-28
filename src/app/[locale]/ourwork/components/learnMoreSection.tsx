import { coll4 } from "@/assets";
import Image from "next/image";
import React from "react";

const LearnMoreSection = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="font-semibold text-[22px] text-center sm:text-[40px] sm:font-normal">
        Learn more about our work
      </h1>
      <div className="w-full flex gap-10 flex-wrap justify-center mb-10">
        <Image
          src={coll4.src}
          width={0}
          height={0}
          sizes="100vw"
          alt="takhi-reintroduction2"
          style={{
            width: "30%",
            minWidth: "300px",
            height: "240px",
            borderRadius: "8px",
            objectFit: "cover",
            right: "10%",
            bottom: "0",
          }}
        />
        <Image
          src={coll4.src}
          width={0}
          height={0}
          sizes="100vw"
          alt="takhi-reintroduction2"
          style={{
            width: "30%",
            minWidth: "300px",
            height: "240px",
            borderRadius: "8px",
            objectFit: "cover",
            right: "10%",
            bottom: "0",
          }}
        />
        <Image
          src={coll4.src}
          width={0}
          height={0}
          sizes="100vw"
          alt="takhi-reintroduction2"
          style={{
            width: "30%",
            minWidth: "300px",
            height: "240px",
            borderRadius: "8px",
            objectFit: "cover",
            right: "10%",
            bottom: "0",
          }}
        />
      </div>
    </div>
  );
};

export default LearnMoreSection;
