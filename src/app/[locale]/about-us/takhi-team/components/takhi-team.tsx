"use client";
import { managementTeam } from "@/assets";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import TeamMember from "../components/team-member";
// import { members } from "@/data/takhi-team/members";
// import { IMember } from "@/types/member";
import { IoMdClose } from "react-icons/io";
import { dataContext } from "@/context/DataProvider";
import { IMember } from "@/types/backend";
import TeamSelectorSection from "./teamSelector";
import SkeletonLoader from "@/components/skeleton";

const TakhiTeam = () => {
  const { members, getMembers } = useContext(dataContext);

  useEffect(() => {
    if (!members) {
      getMembers();
    }
  }, []);
  useEffect(() => {
    if (members) {
      setMainImg(members[0].images[0].url);
      console.log("hi");
    }
  }, [members]);

  const [mainImg, setMainImg] = useState("");
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
    position: "",
    desc: "",
  });
  const [filterText, setFilterText] = useState("Board Members");

  //   const hadleChildData = (data: IMember) => setDataFromChild(data);
  return (
    <>
      {members ? (
        <div className="flex flex-col justify-center items-center w-full gap-10">
          <h1 className="absolute top-24 z-30 text-white font-bold text-[22px] sm:static sm:text-black sm:self-start sm:text-[64px] sm:font-normal">
            Takhi team
          </h1>
          <TeamSelectorSection setFilterText={setFilterText} />

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
              {members
                ?.filter((member) => member.department.name_en === filterText)
                .map((member: IMember) => (
                  <TeamMember
                    key={member.name_en}
                    member={member}
                    handleImage={handleImage}
                    imageClick={imageClick}
                    setDataFromChild={setDataFromChild}
                  />
                ))}
              {/* right slider section */}
              <div
                className={` bg-[#110E0D] text-white absolute gap-10 hidden sm:justify-start sm:flex flex-col justify-center items-start w-full h-full -right-full top-0 transform transition-all duration-700 -translate-x-${handler} top-0 z-20 p-10 `}
              >
                <div className="flex flex-col w-full">
                  <button
                    className="self-end justify-self-end hover:scale-125 "
                    onClick={() => setHandler("0")}
                  >
                    <IoMdClose size={"25px"} />
                  </button>
                  <h1 className="text-[32px] font-semibold">
                    {dataFromChild?.name}
                  </h1>
                  <p className="text-lg font-semibold">
                    {dataFromChild?.position}
                  </p>
                </div>
                <p
                  className="text-[24px]"
                  dangerouslySetInnerHTML={{
                    __html: dataFromChild ? dataFromChild?.desc : "",
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};

export default TakhiTeam;
