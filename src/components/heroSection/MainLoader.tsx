import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { logo } from "@/assets";

type Props = {};

const MainLoader = (props: Props) => {
  let height = window.innerHeight;
  let width = window.innerWidth;
  return (
    <div>
      <motion.div
        initial={{ top: 0 }}
        animate={{ top: height }}
        transition={{ delay: 2, duration: 0.5 }}
        className="w-full h-screen flex justify-center 
    items-center bg-white absolute z-30"
      >
        <Image src={logo.src} width={100} height={100} alt="logo" />
      </motion.div>
      <motion.div
        initial={{ right: 0 }}
        animate={{ right: width }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="w-full h-screen flex justify-center 
    items-center bg-primary absolute z-20"
      ></motion.div>
    </div>
  );
};

export default MainLoader;
