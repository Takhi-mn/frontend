import { motion } from "framer-motion";
import Image from "next/image";
import { logo } from "@/assets";

type Props = {};

const MainLoader = (props: Props) => {
  let height = 0;
  let width = 0;
  if (typeof window !== "undefined") {
    height = window.innerHeight;
    width = window.innerWidth;
  }
  const variants1 = {
    display: "block",
    top: height,
    transition: { delay: 2, duration: 0.5 },
    transitionEnd: {
      display: "none",
    },
  };
  const variants2 = {
    display: "block",
    right: width,
    transition: { delay: 2.5, duration: 0.5 },
    transitionEnd: {
      display: "none",
    },
  };
  return (
    <div>
      <motion.div
        initial={{ top: 0 }}
        animate={variants1}
        className="w-full h-screen flex justify-center 
    items-center bg-white absolute z-30"
      >
        <Image src={logo.src} width={100} height={100} alt="logo" />
      </motion.div>
      <motion.div
        initial={{ right: 0 }}
        animate={variants2}
        className="w-full h-screen flex justify-center 
    items-center bg-primary absolute z-20"
      ></motion.div>
    </div>
  );
};

export default MainLoader;
