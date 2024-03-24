"use client";
import React, { useContext, useState } from "react";
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

  return (
    <>
      <nav className="fixed h-screen bg-primary z-50 flex flex-col justify-between items-center py-9 sm:px-3">
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
        <MenuDrawer isOpen={isOpen} />

        <ThemeController />
      </nav>
    </>
  );
};

export default NavbarNew;
