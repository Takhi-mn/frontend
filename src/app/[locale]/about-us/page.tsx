"use client";
import { horseIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useContext } from "react";
import { location, sms, phone } from "@/assets";
import { useRouter } from "next/navigation";
import { dataContext } from "@/context/DataProvider";
import { contentConverter, nameConverter } from "@/lib/nameConverter";

import { IAboutUs, IPartners } from "@/types/backend";

const AboutUsPage = () => {
  // const partners = [
  //   horseIcon.src,
  //   horseIcon.src,
  //   horseIcon.src,
  //   horseIcon.src,
  //   horseIcon.src,
  //   horseIcon.src,
  //   horseIcon.src,
  //   horseIcon.src,
  // ];
  const router = useRouter();

  interface IProps {
    aboutUs: IAboutUs[] | undefined;
    partners: IPartners[] | undefined;
  }
  const { aboutUs, partners }: IProps = useContext(dataContext);

  const filterName = (filterText: string) => {
    const data = aboutUs?.filter(
      (data) => data.contenttype.name_en === filterText
    );
    return data ? nameConverter(data[0]) : "Loading...";
  };

  const filterNamePartners = (filterText: string) => {
    const data = partners?.filter(
      (data) => data.contenttype.name_en === filterText
    );
    return data ? nameConverter(data[0]) : "Loading...";
  };

  console.log("partners", partners);

  // console.log("filtername", filterName("about-us-section"));

  const filterContent = (filterText: string) => {
    const data = aboutUs?.filter(
      (data) => data.contenttype.name_en === filterText
    );
    console.log("data in filterContent", data);
    return data ? contentConverter(data[0]) : "Loading...";
  };

  const filterPicture = (filterText: string) => {
    const data = aboutUs?.filter(
      (data) => data.contenttype.name_en === filterText
    );
    return data
      ? data[0].images[0].url
      : "https://takhi.mn/wp-content/uploads/2020/11/logo_eng.png";
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 mb-20">
      <div
        className={`flex flex-col justify-center items-center w-full text-white h-[600px] bg-center gap-24 relative`}
      >
        <div className="-z-10 absolute w-full h-full">
          <Image
            alt="about-us-section"
            fill
            objectFit="cover"
            src={`${filterPicture("about-us-section")}`}
            className=""
          />
        </div>
        <h1 className="text-[22px] font-bold sm:text-[40px] sm:font-semibold">
          {filterName("about-us-section")}
        </h1>
        <p
          className="text-[14px] text-center sm:text-[22px] sm:font-semibold sm:max-w-[60%]"
          dangerouslySetInnerHTML={{
            __html: filterContent("about-us-section"),
          }}
        ></p>
      </div>
      <h1 className="font-bold text-[22px] text-center sm:text-[45px] sm:font-light sm:max-w-[500px]">
        {filterName("goal-and-mission")}
      </h1>
      <div className="flex flex-col justify-center items-center gap-8 sm:flex-row sm:max-w-[80%]">
        <div className="flex flex-col gap-5 p-5 sm:flex-1 ">
          <h1 className="text-lg text-primary text-center">
            {filterName("mission")}
          </h1>
          <p
            className="text-[14px] "
            dangerouslySetInnerHTML={{
              __html: filterContent("mission"),
            }}
          ></p>
        </div>
        <div className="flex flex-col gap-5 p-5 sm:flex-1">
          <h1 className="text-lg text-primary text-center">
            {filterName("goal")}
          </h1>
          <p
            className="text-[14px]"
            dangerouslySetInnerHTML={{
              __html: filterContent("goal"),
            }}
          ></p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-5 sm:bg-workPageBackground sm:min-h-[319px] sm:text-white sm:gap-10">
        <h1 className="font-bold text-[22px] sm:text-[45px] sm:font-light">
          {filterName("takhi-team")}
        </h1>
        <p
          className="text-center text-lg sm:max-w-[50%]"
          dangerouslySetInnerHTML={{
            __html: filterContent("takhi-team"),
          }}
        ></p>
        <Button
          className="text-[14px] bg-primary"
          onClick={() => router.push("about-us/takhi-team")}
        >
          Дэлгэрэнгүй
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[22px] sm:text-[45px] sm:font-medium">
          {filterNamePartners("partners")}
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          {partners
            ? partners[0].images.map((partner, index) => (
                <div
                  key={index}
                  className="mx-4 my-2 w-32 h-32 relative sm:w-[200px] sm:h-[200px]"
                >
                  <Image
                    key={index}
                    fill
                    alt={partner.url}
                    src={partner.url}
                    objectFit="contain"
                  />
                </div>
              ))
            : "Loading"}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 w-full">
        <h1 className="text-[22px] font-bold">Contact</h1>
        <div className="sm:flex sm:flex-wrap w-full sm:gap-4 sm:justify-center sm:items-center">
          <div className=" flex flex-col justify-center items-center bg-[#F9FAFB] rounded-2xl p-4 gap-2 w-full sm:max-w-[30%]">
            <div className=" w-12 h-12 relative">
              <Image
                fill
                alt={location.src}
                src={location.src}
                objectFit="contain"
              />
            </div>
            <h3 className="text-[14px] text-center sm:text-[16px]">
              Zavhan Province, Durvuljin Sum, Onts bagh
            </h3>
          </div>
          <div className=" flex flex-col justify-center items-center bg-[#F9FAFB] rounded-2xl p-4 gap-2 w-full sm:max-w-[30%]">
            <div className=" w-12 h-12 relative">
              <Image fill alt={phone.src} src={phone.src} objectFit="contain" />
            </div>
            <h3 className="text-[14px] text-center sm:text-[16px]">
              70004480, 98159903
            </h3>
          </div>
          <div className=" flex flex-col justify-center items-center bg-[#F9FAFB] rounded-2xl p-4 gap-2 w-full sm:max-w-[30%]">
            <div className=" w-12 h-12 relative">
              <Image fill alt={sms.src} src={sms.src} objectFit="contain" />
            </div>
            <h3 className="text-[14px] text-center sm:text-[16px]">
              takhi@ktt.mn
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
