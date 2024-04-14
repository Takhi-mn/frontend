"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { contentConverter } from "@/lib/nameConverter";
import { useLanguage } from "@/context/LanguageProvider";
import { IAboutUs } from "@/types/backend";

type Props = {
  historyDatas: IAboutUs[] | undefined;
};

const DesktopHistory = ({ historyDatas }: Props) => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { selectedLanguage } = useLanguage();
  const variants = {
    show: {
      marginLeft: -17,
      width: 600,
      transition: { duration: 0.3, type: "easeInOut" },
    },
    hide: {
      marginLeft: -17,
      width: 200,
      transition: { duration: 0.3, type: "easeInOut" },
    },
  };
  const textVariants = {
    show: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.3 },
    },
    hide: {
      opacity: 0,
      transition: { duration: 0.01 },
    },
  };
  const test1 = [
    "bg-tahi0",
    "bg-tahi1",
    "bg-tahi2",
    "bg-tahi3",
    "bg-tahi4",
    "bg-tahi5",
  ];

  return (
    <div className="lg:flex hidden justify-center text-white w-full rounded-xl">
      {historyDatas?.map((data, index) => {
        return (
          <motion.div
            key={data?.id + index}
            onClick={() => {
              if (openIndex === index) {
                setOpenIndex(-1);
              } else {
                setOpenIndex(index);
              }
            }}
            initial={{ width: 200, marginLeft: -17 }}
            variants={variants}
            animate={openIndex === index ? "show" : "hide"}
            className={`bg-tahi${index} relative z-0 bg-center h-[700px] cursor-pointer px-6 py-12 rounded-xl`}
          >
            <div className="absolute rounded-xl z-10 top-0 left-0 w-full h-full bg-black bg-opacity-60" />
            <div className="relative z-20">
              <h1 className="text-4xl font-medium">{data.name_en}</h1>
              <motion.p
                variants={textVariants}
                className="text-sm mt-8"
                initial={{ opacity: 0 }}
                animate={openIndex === index ? "show" : "hide"}
                dangerouslySetInnerHTML={{
                  __html: contentConverter(data, selectedLanguage),
                }}
              ></motion.p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DesktopHistory;
