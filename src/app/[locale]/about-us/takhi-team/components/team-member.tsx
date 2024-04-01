"use client";
import { chimedOchir } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const TeamMember = () => {
  const [handler, setHandler] = useState("0");
  return (
    <div className="w-full relative overflow-hidden h-[800px]">
      <div
        className="w-full relative"
        onClick={() => {
          setHandler("full");
        }}
      >
        <div className=" w-full h-[340px] relative overflow-hidden">
          <Image
            fill
            alt={chimedOchir.src}
            src={chimedOchir.src}
            objectFit="cover"
          />
        </div>
        <div className="absolute z-10 h-[66px] w-full text-white bg-gradient-to-t from-black bottom-0 flex flex-col justify-center">
          <h1 className="font-semibold text-[16px]">Chimed-Ochir Bazarsad</h1>
          <p className="font-semibold text-xs">Board Member, Founder</p>
        </div>
      </div>
      <div
        className={` bg-[#110E0D] text-white gap-5 flex flex-col justify-center items-start w-full h-[800px] absolute -right-full transform duration-700 transition-all -translate-x-${handler} top-0 z-10 p-2 `}
      >
        <button
          className="self-end justify-self-end hover:scale-125"
          onClick={() => setHandler("0")}
        >
          <IoMdClose size={"25px"} />
        </button>
        <h1 className="text-[32px] font-semibold">Chimed-Ochir Bazarsad</h1>
        <p className="text-lg font-semibold">Board member, Founder</p>
        <p className="text-[16px]">
          Jean-Louis Perrin, Executive director of Association pour le cheval de
          Przewalski : TAKH, member of the Equid Specialist Group IUCN.
          Jean-Louis has a scientific background in earth sciences – Master
          degree in subsurface geophysics of IPGP (earth geophysical sciences
          institute of Paris), also studied geology (University of Orleans –
          France, and University of Rhode Island – USA). He worked for a private
          French engineering and research laboratory on construction materials,
          as a geophysicist engineer specialized in radar survey for assessment
          and conservation of civil engineering and heritage construction works,
          later in marketing, human resources management and communication. He
          also worked as scientific coordinator of a collaborative research
          project involving researchers, state institutions, industrial and
          financial partners. Currently, TAKH is creating the first
          international scientific Takhi center for research and field studies
          on Przewalski Horses and its ecosystem
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
