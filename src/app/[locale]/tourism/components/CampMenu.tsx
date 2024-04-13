"use client";
import { useLanguage } from "@/context/LanguageProvider";
import Link from "next/link";
import React from "react";
import { FaTag } from "react-icons/fa6";

type Props = {
  page: string;
};

const CampMenu = ({ page }: Props) => {
  const { selectedLanguage } = useLanguage();
  return (
    <div className="flex text-lg font-medium">
      <div
        className={`${
          page === "camp" && "text-destructive"
        } flex-1 border-[1px] py-8`}
      >
        <Link
          className="flex items-center justify-center"
          href={`/${selectedLanguage}/tourism`}
          rel="camp"
        >
          Eco Camp
        </Link>
      </div>
      <div className="flex-1 border-[1px] py-8">
        <Link
          className={`${
            page === "booking" && "text-destructive"
          } flex items-center justify-center`}
          href={`/${selectedLanguage}/tourism/booking`}
          rel="booking"
        >
          <FaTag />
          Tours/price, Booking
        </Link>
      </div>
    </div>
  );
};

export default CampMenu;
