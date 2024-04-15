"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundVideo from "./backgroundVideo";
import { hero } from "@/assets";
import Image from "next/image";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="w-full h-screen bg-background overflow-hidden relative">
      <div className="relative z-10">
        <div className="w-full h-screen top-0 absolute z-20 bg-transparent"></div>
        <BackgroundVideo />
      </div>
      <motion.div
        initial={{ color: "#ffffff" }}
        animate={{ color: "#753100" }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="w-full h-screen relative z-20 flex flex-col justify-center items-center"
      >
        <h1 className="text-[#FF7F50] font-bold text-3xl md:text-5xl xl:7xl">
          KHOMYN TALYN
        </h1>
        <h1
          className=" xl:text-[350px] 
        lg:text-[250px] md:text-[180px] text-8xl  
        font-bold stroke-black text-[#FF7F50]"
        >
          TAKHI
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroSection;
