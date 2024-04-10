"use client";
import React, { useContext, useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import { logo } from "@/assets";
import { ThemeController } from "./ThemeController";
import { dataContext } from "@/context/DataProvider";
import Link from "next/link";
import MyDrawer from "./MyDrawer";

type Props = {
  language: string;
};

const NavbarNew = (language: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:640px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      <nav
        onMouseLeave={() => {
          setIsOpen(false);
        }}
        className="fixed sm:h-screen w-screen sm:w-auto bg-primary z-50 flex sm:flex-col justify-between items-center sm:py-9 sm:px-3 px-4 py-2"
      >
        <Link className="relative z-50" href="/">
          <Image src={logo.src} width={80} height={80} alt="logo" />
        </Link>
        <div className="relative z-50">
          {isOpen ? (
            <IoCloseOutline
              className="sm:hidden"
              size={25}
              color="white"
              onClick={() => {
                if (isMobile) {
                  setIsOpen(false);
                }
              }}
            />
          ) : (
            <CiMenuBurger
              size={25}
              color="white"
              // onClick={() => setIsOpen(true)}
              onMouseEnter={() => {
                setIsOpen(true);
              }}
            />
          )}
        </div>
        <div className="w-full h-full z-20 absolute bg-primary top-0 left-0" />
        <MyDrawer isOpen={isOpen} isMobile={isMobile} setIsOpen={setIsOpen} />
        <div className="hidden sm:block relative z-50">
          <ThemeController />
        </div>
      </nav>
    </>
  );
};

export default NavbarNew;
