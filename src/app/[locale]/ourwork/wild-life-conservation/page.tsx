import { map } from "@/assets";
import Image from "next/image";
import React from "react";

const WildLifeConservation = () => {
  return (
    <div className="flex flex-col justify-center items-center container">
      <h1 className="">Wildlife Conservation</h1>

      <div className="flex flex-col flex-wrap">
        <Image
          src={map.src}
          width={0}
          height={0}
          sizes="100vw"
          alt={map.src}
          style={{
            borderRadius: "8px",
            objectFit: "cover",
            width: "100%",
            maxWidth: "700px",
          }}
        />
        <h1 className="text-[22px] font-semibold sm:text-[44px] sm:font-normal">
          Khomyn Tal, an area dominated by desert steppe and arid steppe, is
          located in the Great Lakes Depression in Western Mongolia.
        </h1>
      </div>
      <p className="text-center text-lg">
        Khomyn Tal contains the north-western edge of Ikh Mongol Els National
        Park, extensive area covered by sand dunes, as well as critical wetlands
        such as Khar Nuur, Baganuur and Durgon lakes and Zavkhan and Teel
        rivers. It is a geographically isolated 2900 km2 natural island
        surrounded by inter-connected lakes and rivers in the west, north and
        east and sand dunes along the southern border.
      </p>
      <h1 className="font-semibold text-[22px]">Fauna</h1>
    </div>
  );
};

export default WildLifeConservation;
