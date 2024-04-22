"use client";
import { Button } from "@/components/ui/button";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import { scrollerData } from "@/data/donation";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import React, { useContext, useEffect, useState } from "react";

interface IProps {
  isClicked: string;
  donationType: IAboutUs[] | undefined;
  setIsClicked: any;
  selectedLanguage: string | string[];
}

const Scroller = ({
  isClicked,
  donationType,
  setIsClicked,
  selectedLanguage,
}: IProps) => {
  return (
    <div className="flex flex-1 flex-col gap-5 overflow-y-scroll h-[650px]">
      {donationType?.map((data: IAboutUs) => (
        <div key={data.id}>
          <div
            className={`${
              isClicked === data.id ? "bg-primary" : "bg-white"
            } text-black shadow-xl w-[390px] h-[300px] flex p-5 gap-10 flex-col justify-center items-center rounded-md`}
            onClick={() => {
              setIsClicked(data.id);
            }}
          >
            <h1 className="font-bold text-xl">
              {nameConverter(data, selectedLanguage) + " " + `${data.price}$`}
            </h1>
            <p
              className="line-clamp-[10]"
              dangerouslySetInnerHTML={{
                __html: data ? contentConverter(data, selectedLanguage) : "",
              }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scroller;
