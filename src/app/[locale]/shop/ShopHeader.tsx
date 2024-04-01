import React from "react";

type Props = {};

const ShopHeader = (props: Props) => {
  return (
    <div className="w-full relative bg-workPageBackground h-28 md:h-60 p-5 bg-center bg-cover">
      <h1 className="text-white text-4xl md:text-7xl">Shop</h1>
    </div>
  );
};

export default ShopHeader;
