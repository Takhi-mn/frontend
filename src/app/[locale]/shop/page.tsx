import React from "react";
import ShopHeader from "./ShopHeader";
import ShopCard from "./ShopCard";
import ShopPageComp from "./ShopPageComp";

type Props = {};

const ShopPage = (props: Props) => {
  return (
    <div className="text-foreground bg-background">
      <ShopHeader />
      <ShopPageComp />
    </div>
  );
};

export default ShopPage;
