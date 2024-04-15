"use client";
import React, { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import { useLanguage } from "@/context/LanguageProvider";
import { IShop } from "@/types/backend";
import { getShopItems } from "@/actions/getShopitems";

type Props = {};

const ShopPageComp = (props: Props) => {
  const { selectedLanguage } = useLanguage();
  const [items, setItems] = useState<IShop[]>();
  useEffect(() => {
    getShopItems().then((data) => setItems(data));
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-5 my-20">
      {items?.map((item) => (
        <ShopCard
          key={item.id}
          item={item}
          selectedLanguage={selectedLanguage}
        />
      ))}
    </div>
  );
};

export default ShopPageComp;
