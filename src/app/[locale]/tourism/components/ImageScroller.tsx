"use client";
import { campImages } from "@/data/camp";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ImageScroller = (props: Props) => {
  return (
    <div className="relative w-full h-1/3">
      {campImages.map((item, index) => (
        <motion.div
          className="absolute w-full h-full"
          animate={{ opacity: [0, 0.5, 1, 0.5, 0] }}
          transition={{
            delay: index * 5 + 5,
            duration: 4,
          }}
        >
          <img
            className="object-cover w-full h-56"
            src={item.image.src}
            alt=""
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageScroller;
