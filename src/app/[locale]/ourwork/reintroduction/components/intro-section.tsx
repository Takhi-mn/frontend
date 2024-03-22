import { one, three, two } from "@/assets";
import Image from "next/image";
import React from "react";

const IntroSection = () => {
  return (
    <div className="relative w-full h-[550px] z-30">
      <Image
        src={one.src}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction1"
        style={{
          width: "100%",
          height: "450px",
          borderRadius: "6px",
          position: "absolute",
          zIndex: 50,
          objectFit: "cover",
        }}
      />
      <Image
        src={two.src}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction2"
        style={{
          width: "25%",
          height: "200px",
          borderRadius: "24px",
          position: "absolute",
          zIndex: 60,
          objectFit: "cover",
          right: "10%",
          bottom: "0",
        }}
      />
      <Image
        src={three.src}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction3"
        style={{
          width: "20%",
          height: "52px",
          borderRadius: "16px",
          position: "absolute",
          zIndex: 60,
          objectFit: "cover",
          right: "0",
          bottom: "-26px",
        }}
      />
      <h6 className=" absolute w-[70%] bottom-0">
        Takhi is a very rare equid species according to Mongolian Red Book. As
        of IUCN categorization, Takhi is classified as internationally and
        regionally endangered.
      </h6>
    </div>
  );
};

export default IntroSection;
