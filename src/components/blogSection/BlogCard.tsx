import React from "react";
import Rating from "./Rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const BlogCard = (props: Props) => {
  return (
    <div className="lg:flex-1 bg-muted p-5">
      <h1 className="text-xl font-bold">
        The Government of Mongolia, represented by the Ministry of Environment
        and Tourism signed agreement with the Khomyn Talyn Takhi NGO
      </h1>
      <p>
        On 25th November 2023, during the Second Forum of Environmental rangers,
        Mr. Bat-Erdene B, Minister of Environment and Tourism and Mr. Boldgiv B,
        Board Chairman of the “Khomyn Talyn Takhi” NGO have signed a Management
        Agreement on executing protected area’s management of Khomyn Tal
        National Park.
      </p>
      <div className="flex justify-between mt-5">
        <Rating />
        <p className="font-extrabold">24/07/03</p>
      </div>
      <div className="flex gap-3 items-center">
        <Avatar className="mt-3">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3 className="font-extrabold">Christipher N.</h3>
      </div>
    </div>
  );
};

export default BlogCard;
