"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundVideo from "./backgroundVideo";
import MainLoader from "./MainLoader";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <MainLoader />
      <div className="relative z-10">
        <BackgroundVideo />
      </div>
      <motion.div
        initial={{ color: "#ffffff" }}
        animate={{ color: "#753100" }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="w-full h-screen relative z-20 flex justify-center items-center"
      >
        <h1
          className=" xl:text-[400px] 
        lg:text-[300px] md:text-[200px] text-9xl  
        font-bold stroke-black"
        >
          TAKHI
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroSection;
