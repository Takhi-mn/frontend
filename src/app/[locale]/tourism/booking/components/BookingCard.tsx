import { book } from "@/assets";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Props = {};

const BookingCard = (props: Props) => {
  return (
    <div className="w-full my-24 flex gap-10">
      <div className="w-1/2 h-[700px] hidden md:block">
        <img className="h-full object-cover" src={book.src} alt="" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="text-3xl ">Book Your trip</h1>
        <div className="w-full flex flex-col gap-5 mt-10">
          <div>
            <p>Full name &#40;required&#41; </p>
            <Input
              className="w-full"
              type="email"
              placeholder="Write your name her"
            />
          </div>

          <div>
            <p>Trip name &#40;required&#41; </p>
            <Input
              className="w-full"
              type="email"
              placeholder="Write tour name here"
            />
          </div>
          <div>
            <p>Email &#40;required&#41; </p>
            <Input
              className="w-full"
              type="email"
              placeholder="Write your email here"
            />
          </div>
          <div>
            <p>Book date &#40;required&#41; </p>
            <Input className="w-full" type="date" />
          </div>
          <div>
            <p>Number of tourists &#40;required&#41; </p>
            <Input
              className="w-full"
              type="number"
              placeholder="Write tourists number here"
            />
          </div>
          <div>
            <p>More info </p>
            <Textarea
              className="w-full h-28"
              placeholder="You can write more info."
            />
          </div>
          <Button className="w-full">Send</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
