"use client";

import React, { useContext, useState, useTransition } from "react";
import { menuData } from "@/data";
import Link from "next/link";
import { logo } from "@/assets";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { languageContext } from "@/context/LanguageProvider";
import { ThemeController } from "./ThemeController";

type Props = {
  donate: string;
};

const Navbar = async ({ donate }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { selectedLanguage } = useContext(languageContext);
  const handleLanguage = () => {
    router.replace(selectedLanguage === "en" ? "mn" : "en");
  };
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 ">
      <div
        className="w-full flex justify-between 
      items-center max-w-7xl bg-secondary mx-auto px-7 py-2 rounded-xl"
      >
        <Link
          href="/"
          className="flex items-center gap2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo.src} width={80} height={56} alt="logo" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {menuData.map((nav) => (
            <li
              key={nav.titleEn}
              className={` hover:text-zinc-300 text-[18px] cursor-pointer`}
            >
              <a href={`#${nav.url}`}>{nav.titleEn}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeController />
          <Button className="bg-primary hover:bg-orange-400 text-white font-normal">
            {donate}
          </Button>
          <button onClick={handleLanguage} className="text-white font-medium">
            MN/EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
