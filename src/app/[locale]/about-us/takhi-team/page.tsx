import { managementTeam } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import TeamMember from "./components/team-member";

const TakhiTeamPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen gap-10">
      <h1 className="absolute top-24 z-30 text-white font-bold text-[22px]">
        Takhi team
      </h1>
      <div className="w-full">
        <div className="relative w-full h-[200px] scale-150 overflow-hidden">
          <Image
            fill
            alt={managementTeam.src}
            src={managementTeam.src}
            objectFit="cover"
          />
        </div>
        <div className="w-full mt-[50px]">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="py-[31px] w-full border text-center">
              Board Members
            </h1>
            <h1 className="py-[31px] w-full border text-center">
              Management and Operation
            </h1>
            <h1 className="py-[31px] w-full border text-center">Field staff</h1>
          </div>
        </div>
      </div>

      <div className="w-full container">
        <TeamMember />
      </div>
    </div>
  );
};

export default TakhiTeamPage;
