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

import { dataContext } from "@/context/DataProvider";

type Props = {
  isOpen: boolean;
};

const MenuDrawer = ({ isOpen }: Props) => {
  const { taxonomies } = useContext(dataContext);
  return (
    <Drawer direction="left" open={isOpen}>
      <DrawerContent
        className="text-white py-9 sm:px-3 sm:w-1/3 
  bg-primary sm:h-screen opacity-90 left-32"
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
            <li className=" group font-serif text-3xl mt-4 gap-5 hover:text-zinc-600 transition-all">
              <div className="flex items-center gap-4">
                {taxonomie.name}
                <GoArrowRight />
              </div>

              <div className="hidden group-hover:block">
                {taxonomie.children?.map((child) => (
                  <li className="font-sans text-lg hover:text-zinc-800">
                    {child.name}
                  </li>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
