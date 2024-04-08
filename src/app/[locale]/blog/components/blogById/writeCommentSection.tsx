import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const WriteCommentSection = () => {
  return (
    <div className="flex flex-col justify-center gap-10 w-full mb-20 sm:max-w-[60%]">
      <h1 className="font-bold text-[22px] text-center sm:font-medium sm:text-left">
        Write Comment
      </h1>
      <div className=" flex flex-col gap-4 sm:gap-8">
        <div>
          <p className="sm:hidden">Full name(required)</p>
          <Input className="px-2" placeholder="Write your name here" />
        </div>
        <div>
          <p className="sm:hidden">Write Comment</p>
          <Textarea
            className="px-2 h-36"
            placeholder="You can write comment here"
          />
        </div>
        <Button className="w-full sm:max-w-[50%] sm:self-center">Send</Button>
      </div>
    </div>
  );
};

export default WriteCommentSection;
