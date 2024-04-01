import React from "react";
import ShopHeader from "./ShopHeader";
import ShopCard from "./ShopCard";

type Props = {};

const ShopPage = (props: Props) => {
  return (
    <div>
      <ShopHeader />
      <div className="flex flex-wrap justify-center gap-5 my-20">
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
};

export default ShopPage;
