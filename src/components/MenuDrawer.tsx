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
import { GoArrowRight } from "react-icons/go";
import { motion, Variants } from "framer-motion";

import { dataContext } from "@/context/DataProvider";

type Props = {
  isOpen: boolean;
  isMobile: boolean;
};

const MenuDrawer = ({ isOpen, isMobile }: Props) => {
  const { taxonomies } = useContext(dataContext);
  return (
    <Drawer direction={isMobile ? "top" : "left"} open={isOpen} modal={false}>
      <DrawerContent
        className={`text-white sm:py-9 px-4 sm:w-1/3 
  bg-primary sm:h-screen h-auto opacity-95 sm:left-32 ${
    isMobile ? "top-0" : "bottom-0"
  }`}
      >
        <ul className="flex gap-3">
          Language:
          <li>EN</li>
          <li>MN</li>
          <li>GR</li>
          <li>FR</li>
        </ul>
        <ul className="mt-10">
          {taxonomies?.map((taxonomie) => (
            <li
              key={taxonomie.id}
              className=" group font-serif text-3xl mt-4 gap-5
             hover:text-zinc-600 transition-all"
            >
              <div className="flex items-center gap-4">
                {taxonomie.name}
                <GoArrowRight />
              </div>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "auto" }}
                transition={{ type: "spring", duration: 2 }}
                className="hidden group-hover:block "
              >
                {taxonomie.children?.map((child) => (
                  <li
                    key={child.id}
                    className="font-sans text-lg hover:text-zinc-800"
                  >
                    {child.name}
                  </li>
                ))}
              </motion.div>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
