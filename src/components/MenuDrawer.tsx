"use client";
import React, { useContext, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion, Variants } from "framer-motion";

import { dataContext } from "@/context/DataProvider";
import { languageContext } from "@/context/LanguageProvider";

type Props = {
  isOpen: boolean;
  isMobile: boolean;
  setIsOpen: any;
};

const MenuDrawer = ({ isOpen, isMobile, setIsOpen }: Props) => {
  const { taxonomies } = useContext(dataContext);
  const { handleLanguage, selectedLanguage } = useContext(languageContext);
  const variants = {
    show: {
      display: "block",
      height: "auto",
      opacity: 1,
      transition: { type: "spring", duration: 1 },
    },
    hide: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.5 },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <Drawer direction={isMobile ? "top" : "left"} open={isOpen} modal={false}>
      <DrawerContent
        className={`text-white sm:py-9 px-4 sm:w-1/3 
  bg-primary sm:h-screen h-auto opacity-95 sm:left-32 ${
    isMobile ? "top-0" : "bottom-0"
  }`}
      >
        <div className="flex gap-3">
          Language:
          <div
            onClick={() => {
              handleLanguage("en");
            }}
            className={` ${
              selectedLanguage === "en" &&
              "font-medium border-b-2 border-b-white"
            } cursor-pointer`}
          >
            EN
          </div>
          <div
            onClick={() => {
              handleLanguage("mn");
            }}
            className={`${
              selectedLanguage === "mn" &&
              "font-medium border-b-2 border-b-white"
            } cursor-pointer`}
          >
            MN
          </div>
          <div
            onClick={() => {
              handleLanguage("gr");
            }}
            className={`cursor-pointer${
              selectedLanguage === "gr" &&
              "font-medium border-b-2 border-b-white"
            }`}
          >
            GR
          </div>
          <div
            onClick={() => {
              handleLanguage("fr");
            }}
            className={`cursor-pointer${
              selectedLanguage === "fr" &&
              "font-medium border-b-2 border-b-white"
            }`}
          >
            FR
          </div>
        </div>
        <div className="mt-10">
          {taxonomies?.map((taxonomie) => {
            const [onHover, setOnHover] = useState(false);
            return (
              <div
                key={taxonomie.id}
                className=" group font-sans text-2xl mt-4 gap-5
              transition-all"
              >
                <div
                  onClick={() => {
                    setOnHover(!onHover);
                  }}
                  className="flex items-center cursor-pointer sm:w-2/3 justify-between relative z-30"
                >
                  {taxonomie.name}
                  {onHover ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </div>

                <motion.div
                  variants={variants}
                  animate={onHover ? "show" : "hide"}
                  className="sm:ml-5"
                >
                  {taxonomie.children?.map((child, index) => (
                    <div
                      key={child.id + index}
                      className="font-sans text-lg hover:text-zinc-800 mt-5 cursor-pointer"
                    >
                      {child.name}
                    </div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
