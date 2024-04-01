import { horseIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { location, sms, phone } from "@/assets";

const AboutUsPage = () => {
  const partners = [
    horseIcon.src,
    horseIcon.src,
    horseIcon.src,
    horseIcon.src,
    horseIcon.src,
    horseIcon.src,
    horseIcon.src,
    horseIcon.src,
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 mb-20">
      <div className="flex flex-col justify-center items-center bg-workPageBackground w-full text-white h-[600px] bg-center gap-24">
        <h1 className="text-[22px] font-bold sm:text-[40px] sm:font-semibold">
          ABOUT US
        </h1>
        <p className="text-[14px] text-center sm:text-[22px] sm:font-semibold sm:max-w-[60%]">
          Khomyn Talyn Takhi (KTT), established as a Non-Governmental
          Organization in 2014, has been operating as a sister organization to
          Association pour le cheval de Przewalski; TAKH, France. Our
          operational priority is reintroducing wild horses, biodiversity
          conservation and local sustainable development in Khomyn Tal.
        </p>
      </div>
      <h1 className="font-bold text-[22px] text-center sm:text-[45px] sm:font-light sm:max-w-[500px]">
        Khomyn Talyn Takhi’s Goal and Mission
      </h1>
      <div className="flex flex-col justify-center items-center gap-8 sm:flex-row sm:max-w-[80%]">
        <div className="flex flex-col gap-5 p-5 sm:flex-1 ">
          <h1 className="text-lg text-primary text-center">MISSION</h1>
          <p className="text-[14px]">
            We, Khomyn Talyn Takhi NGO, are committed to promoting and
            implementing nature conservation, focusing on evidence-based
            reintroduction and safeguarding of the endangered Przewalski’s
            horse, the only wild horse in the world.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-5 sm:flex-1">
          <h1 className="text-lg text-primary text-center">GOAL</h1>
          <p className="text-[14px]">
            To establish a viable population of Przewalski’s horses (1000-1500
            individuals) in Khomyn Tal National Park and develop a model for
            reintroduction projects.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-5 sm:bg-workPageBackground sm:min-h-[319px] sm:text-white sm:gap-10">
        <h1 className="font-bold text-[22px] sm:text-[45px] sm:font-light">
          TAKHI TEAM
        </h1>
        <p className="text-center text-lg sm:max-w-[50%]">
          KTT is a dynamic team consists of five staff in Ulaanbaatar and nine
          staff in Khomyn Tal reintroduction site
        </p>
        <Button className="text-[14px] bg-primary">Дэлгэрэнгүй</Button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[22px] sm:text-[45px] sm:font-medium">
          Our Partners and Supporters
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          {partners.map((partner, index) => (
            <div className="mx-4 my-2 w-32 h-32 relative sm:w-[200px] sm:h-[200px]">
              <Image
                key={index}
                fill
                alt={partner}
                src={partner}
                objectFit="contain"
              />
            </div>
          ))}
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
