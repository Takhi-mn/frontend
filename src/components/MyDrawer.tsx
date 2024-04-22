"use client";
import { useContext, useState } from "react";
import { dataContext } from "@/context/DataProvider";
import { languageContext } from "@/context/LanguageProvider";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { nameConverter } from "@/lib/nameConverter";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  isOpen: boolean;
  isMobile: boolean;
  setIsOpen: any;
};

const MyDrawer = ({ isOpen, isMobile, setIsOpen }: Props) => {
  const router = useRouter();
  const [onHover, setOnHover] = useState<number>();
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
    <div
      className={`text-white  absolute z-10 sm:left-24 left-0 sm:top-0 top-16 bg-primary opacity-95 sm:h-screen sm:w-80 w-screen p-10 transition-all transform duration-500 
      ${
        isMobile
          ? isOpen
            ? "translate-y-0"
            : "-translate-y-[120%]"
          : isOpen
          ? "translate-x-0"
          : "-translate-x-[420px]"
      } `}
    >
      <div className="flex gap-3">
        Language:
        <div
          onClick={() => {
            handleLanguage("en");
          }}
          className={` ${
            selectedLanguage === "en" && "font-medium border-b-2 border-b-white"
          } cursor-pointer`}
        >
          EN
        </div>
        <div
          onClick={() => {
            handleLanguage("mn");
          }}
          className={`${
            selectedLanguage === "mn" && "font-medium border-b-2 border-b-white"
          } cursor-pointer`}
        >
          MN
        </div>
        <div
          onClick={() => {
            handleLanguage("de");
          }}
          className={` ${
            selectedLanguage === "de" && "font-medium border-b-2 border-b-white"
          } cursor-pointer`}
        >
          GR
        </div>
        <div
          onClick={() => {
            handleLanguage("fr");
          }}
          className={`${
            selectedLanguage === "fr" && "font-medium border-b-2 border-b-white"
          } cursor-pointer`}
        >
          FR
        </div>
      </div>
      <div className="mt-10 pb-7 sm:pb-0">
        {taxonomies?.map((taxonomie, index) => {
          return (
            <div
              key={taxonomie.id + index}
              className=" group font-sans text-2xl mt-4 gap-5
              transition-all"
            >
              <div className="flex items-center cursor-pointer w-full justify-between relative z-30 hover:text-zinc-600">
                <Link
                  href={`/${selectedLanguage}/${taxonomie.name_en
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                  rel={taxonomie.name_en}
                >
                  {nameConverter(taxonomie, selectedLanguage)}
                </Link>
                <div>
                  {taxonomie.children?.length != 0 ? (
                    onHover === taxonomie.id ? (
                      <IoIosArrowDown
                        onClick={() => {
                          setOnHover(0);
                        }}
                      />
                    ) : (
                      <IoIosArrowForward
                        onClick={() => {
                          setOnHover(taxonomie.id);
                        }}
                      />
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <motion.div
                initial={{ display: "none" }}
                variants={variants}
                animate={onHover === taxonomie.id ? "show" : "hide"}
                className="sm:ml-5"
              >
                {taxonomie.children?.map((child, index) => (
                  <div
                    key={child.id + index + child.name_mn}
                    className="font-sans text-lg hover:text-zinc-600 mt-5 cursor-pointer"
                  >
                    <Link
                      href={`/${selectedLanguage}/${taxonomie.name_en
                        .replace(/\s/g, "-")
                        .toLowerCase()}/${child.name_en
                        .replace(/\s/g, "-")
                        .toLowerCase()}`}
                      rel={child.name_en}
                    >
                      {nameConverter(child, selectedLanguage)}
                    </Link>
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyDrawer;
