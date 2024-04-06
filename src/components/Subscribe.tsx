import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

type Props = {
  subscribe: string;
  notify: string;
  email: string;
  submit: string;
};

const Subscribe = ({ subscribe, notify, email, submit }: Props) => {
  return (
    <div className="w-full bg-zinc-950">
      <div className="md:w-3/4 flex flex-col gap-5 md:justify-between md:flex-row px-4 md:px-16 py-8 text-white ">
        <div>
          <h4 className="font-medium text-xl">{subscribe}</h4>
          <p>{notify}</p>
        </div>
        <div className="md:w-96 w-full">
          <Input type="email" placeholder={email} className="" />
        </div>

        <Button className="px-10">{submit}</Button>
      </div>
    </div>
  );
};

export default Subscribe;
