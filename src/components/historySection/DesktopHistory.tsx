"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { historyDatas } from "@/data";

type Props = {};

const DesktopHistory = (props: Props) => {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const variants = {
    show: {
      marginLeft: -17,
      width: 400,
      transition: { duration: 0.3, type: "easeInOut" },
    },
    hide: {
      marginLeft: -17,
      width: 150,
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
  return (
    <div className="lg:flex hidden justify-center text-white w-full rounded-xl">
      {historyDatas.map((data, index) => {
        return (
          <motion.div
            key={data.month + index}
            onClick={() => {
              if (openIndex === index) {
                setOpenIndex(-1);
              } else {
                setOpenIndex(index);
              }
            }}
            initial={{ width: 150, marginLeft: -17 }}
            variants={variants}
            animate={openIndex === index ? "show" : "hide"}
            className={`bg-tahi${index} relative z-0 bg-center h-[500px] cursor-pointer px-6 py-12 rounded-xl`}
          >
            <div className="absolute rounded-xl z-10 top-0 left-0 w-full h-full bg-black bg-opacity-60" />
            <div className="relative z-20">
              <h1 className="text-4xl font-medium">{data.month}</h1>
              <h3 className="text-2xl font-thin">Month</h3>
              <motion.p
                variants={textVariants}
                className="text-sm mt-8"
                initial={{ opacity: 0 }}
                animate={openIndex === index ? "show" : "hide"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tortor nibh, aliquam id eros in, eleifend bibendum ex. Aenean
                quis eleifend tellus. Curabitur vel ullamcorper ex.
              </motion.p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DesktopHistory;
