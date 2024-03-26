import { five } from "@/assets";
import Image from "next/image";
import React from "react";

const CardPhoto = () => {
  return (
    <div className="w-full h-[500px] flex items-center relative">
      <div className="flex justify-center items-center absolute z-10 w-1/2 bg-white bg-opacity-60 rounded-[50px] p-5">
        <p>
          It is not uncommon to encounter numerous complexities in the
          reintroduction work. Three major issues have been identified
          specifically with regard to Takhi. Firstly, water is of utmost
          importance. Zavkhan river is a source of water for Takhi in spring,
          summer and autumn. In winter when the river is frozen the animals
          satisfy their thirst with snow. When snowfall is low or unusually late
          Takhi face water shortage. Secondly, Takhi can mingle with domestic
          horses which may result in hybridization. Takhi and domestic horses
          are very close relatives and can easily mate and reproduce. Thirdly,
          there is a risk of disease transmission from livestock to Takhi. There
          have been cases of domestic horses entering into the reintroduction
          fence in Seeriin Nuruu which currently is not seen as a serious
          concern. However, in the future, this may pose an increased risk of
          disease transmission or hybridization.
        </p>
      </div>
      <Image
        src={five.src}
        width={0}
        height={0}
        sizes="100vw"
        alt="takhi-reintroduction3211"
        style={{
          width: "65%",
          height: "506px",
          right: "0px",
          position: "absolute",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default CardPhoto;
