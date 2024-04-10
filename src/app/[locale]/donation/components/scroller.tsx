import { Button } from "@/components/ui/button";
import { scrollerData } from "@/data/donation";
import React from "react";

const Scroller = () => {
  return (
    <div className="hidden sm:flex flex-1 flex-col w-full gap-3 overflow-y-auto max-h-[852px] py-10 justify-center items-center">
      {scrollerData.map((data) => (
        <div>
          <Button className="bg-white text-black shadow-xl w-[390px]">
            {data}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Scroller;
