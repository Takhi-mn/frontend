"use client";
import { managementTeam } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import TeamMember from "./components/team-member";
import { members } from "@/data/takhi-team/members";
import { IMember } from "@/types/member";
import { IoMdClose } from "react-icons/io";

const TakhiTeamPage = () => {
  const [mainImg, setMainImg] = useState(members[0].img.src);
  const [imgOpacity, setImageOpacity] = useState("opacity-100");
  const handleImage = (src: string) => {
    setImageOpacity("opacity-40");

    setTimeout(() => {
      setMainImg(src);
      setImageOpacity("opacity-100");
    }, 100);
  };
  const [handler, setHandler] = useState("0");
  const test = ["-translate-x-full", "-translate-x-0"];
  const imageClick = () => {
    setHandler("full");
    console.log("handler", handler);
  };

  const [dataFromChild, setDataFromChild] = useState({
    name: "",
    desc: "",
    position: "",
  });

  const hadleChildData = (data: IMember) => setDataFromChild(data);
  return (
    <div className="flex flex-col justify-center items-center w-full gap-10">
      <h1 className="absolute top-24 z-30 text-white font-bold text-[22px] sm:static sm:text-black sm:self-start sm:text-[64px] sm:font-normal">
        Takhi team
      </h1>
      <div className="w-full">
        <div className="w-full h-[200px] relative overflow-hidden sm:h-[471px]">
          <Image
            fill
            alt={managementTeam.src}
            src={managementTeam.src}
            objectFit="cover"
            style={{ scale: "1.5", left: "10%" }}
          />
        </div>
        <div className="w-full mt-[50px] ">
          <div className="w-full flex flex-col justify-center items-center sm:flex-row">
            <h1 className="py-[31px] w-full border text-center sm:max-w-[33.33333333%]">
              Board Members
            </h1>
            <h1 className="py-[31px] w-full border text-center sm:max-w-[33.33333333%]">
              Management and Operation
            </h1>
            <h1 className="py-[31px] w-full border text-center sm:max-w-[33.33333333%]">
              Field staff
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full container flex flex-col sm:flex-row sm:relative gap-x-20 ">
        {/* Left section // Image Selector*/}
        <div
          className={`hidden sm:flex w-[35%] min-w-[200px] relative  max-h-[380px] transition-all duration-75 ${imgOpacity}`}
          onClick={() => imageClick}
        >
          <Image src={mainImg} alt="Main Image" fill objectFit="cover" />
        </div>
        {/* Right section // Members */}
        <div className=" flex flex-col sm:flex-row sm:flex-wrap w-[100%] gap-5 sm:relative overflow-hidden">
          {members.map((member: IMember) => (
            <TeamMember
              member={member}
              handleImage={handleImage}
              imageClick={imageClick}
              setDataFromChild={setDataFromChild}
            />
          ))}
          {/* right slider section */}
          <div
            className={` bg-[#110E0D] text-white absolute gap-10 hidden sm:justify-between sm:flex flex-col justify-center items-start w-full h-full -right-full top-0 transform transition-all duration-700 -translate-x-${handler} top-0 z-20 p-10 `}
          >
            <button
              className="self-end justify-self-end hover:scale-125 "
              onClick={() => setHandler("0")}
            >
              <IoMdClose size={"25px"} />
            </button>
            <h1 className="text-[32px] font-semibold">{dataFromChild.name}</h1>
            <p className="text-lg font-semibold">{dataFromChild.position}</p>
            <p className="text-[16px]">{dataFromChild.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakhiTeamPage;
