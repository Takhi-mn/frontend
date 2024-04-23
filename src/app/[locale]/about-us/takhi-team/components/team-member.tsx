"use client";
import { boldgiv } from "@/assets";
import { useLanguage } from "@/context/LanguageProvider";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IPropsMember } from "@/types/member";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const TeamMember = ({
  member,
  handleImage,
  imageClick,
  setDataFromChild,
}: IPropsMember) => {
  const [handler, setHandler] = useState("0");
  const [heightHandler, setHeightHandler] = useState("auto");
  const test = ["-translate-x-[400px]", "-translate-x-0"];
  const onImageClick = () => {
    setHandler("[400px]");
    setHeightHandler("[900px]");
  };
  const onCloseClick = () => {
    setHandler("0");
    setHeightHandler("auto");
  };
  const { selectedLanguage } = useLanguage();
  return (
    <div className="w-full sm:max-w-[200px]">
      {/* mobile Version */}
      <div
        className={`w-full relative overflow-hidden h-${heightHandler} sm:hidden`}
      >
        <div
          className="w-full relative"
          onClick={() => {
            onImageClick();
          }}
        >
          <div className=" w-full h-[340px] relative overflow-hidden">
            <Image
              fill
              alt={member.images[0].url}
              src={member.images[0].url}
              objectFit="cover"
            />
          </div>
          <div className="absolute z-10 h-[66px] w-full text-white bg-gradient-to-t from-black bottom-0 flex flex-col justify-center">
            <h1 className="font-semibold text-[16px]">
              {nameConverter(member, selectedLanguage)}
            </h1>
            <p className="font-semibold text-xs">
              {nameConverter(member.position, selectedLanguage)}
            </p>
          </div>
        </div>
        <div
          className={` bg-[#110E0D] text-white gap-5 flex flex-col justify-center items-start w-full h-[900px] absolute -right-[400px] transform duration-700 transition-all -translate-x-${handler} top-0 z-20 p-2`}
        >
          <button
            className="self-end justify-self-end hover:scale-125"
            onClick={() => onCloseClick()}
          >
            <IoMdClose size={"25px"} />
          </button>
          <h1 className="text-[32px] font-semibold">
            {nameConverter(member, selectedLanguage)}
          </h1>
          <p className="text-lg font-semibold">
            {nameConverter(member.position, selectedLanguage)}
          </p>
          <p
            className="text-[16px]"
            dangerouslySetInnerHTML={{
              __html: member ? contentConverter(member, selectedLanguage) : "",
            }}
          ></p>
        </div>
      </div>
      {/* sm */}

      <div
        className="w-full max-w-[200px] relative sm:flex flex-col justify-center items-center hidden"
        onClick={() => {
          imageClick();
          setDataFromChild({
            name: nameConverter(member, selectedLanguage),
            position: nameConverter(member.position, selectedLanguage),
            desc: contentConverter(member, selectedLanguage),
          });
        }}
      >
        <div
          onMouseEnter={() => handleImage(member.images[0].url)}
          className=" w-full  h-[250px] relative overflow-hidden"
        >
          <Image
            fill
            alt={member.images[0].url}
            src={member.images[0].url}
            objectFit="cover"
          />
        </div>
        <div className="z-10 h-[100px] w-full bottom-0 flex flex-col justify-center">
          <h1 className="font-semibold text-[16px]">
            {nameConverter(member, selectedLanguage)}
          </h1>
          <p className="font-semibold text-xs">
            {nameConverter(member.position, selectedLanguage)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
