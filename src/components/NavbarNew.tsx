"use client";
import React, { useContext, useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { logo } from "@/assets";
import { ThemeController } from "./ThemeController";
import { dataContext } from "@/context/DataProvider";
import MenuDrawer from "./MenuDrawer";

type Props = {};

const NavbarNew = (props: Props) => {
  const { taxonomies } = useContext(dataContext);
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
      <nav className="fixed sm:h-screen w-screen sm:w-auto bg-primary z-50 flex sm:flex-col justify-between items-center sm:py-9 sm:px-3 px-4 py-2">
        <Image src={logo.src} width={80} height={80} alt="logo" />
        {isOpen ? (
          <IoCloseOutline
            size={25}
            color="white"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <CiMenuBurger
            size={25}
            color="white"
            onClick={() => setIsOpen(true)}
          />
        )}
        <MenuDrawer isOpen={isOpen} isMobile={isMobile} />
        <div className="hidden sm:block">
          <ThemeController />
        </div>
      </nav>
    </>
  );
};

export default NavbarNew;
