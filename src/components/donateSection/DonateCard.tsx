"use client";
import { donateValues } from "@/data";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";

type Props = {
  donate: string;
  once: string;
  monthly: string;
};

const DonateCard = ({ donate, once, monthly }: Props) => {
  const [selected, setSelected] = useState<number | string>();
  return (
    <div className="bg-white text-black rounded-md mt-7 p-2 md:p-10 flex-1">
      <h1 className="text-center text-3xl md:5xl font-medium">{donate}</h1>
      <div className="text-center flex flex-wrap md:justify-center md:mt-20">
        {donateValues.map((value, index) => (
          <div
            key={index}
            onClick={() => {
              setSelected(value);
            }}
            className={`p-4 shadow-md rounded-md w-1/2 md:w-1/4 md:m-3 text-xl ${
              value === selected && "bg-primary"
            }`}
          >
            {value}$
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Button className="w-full md:w-2/3 md:mt-20 py-7 text-xl">
          {donate}
        </Button>
      </div>
    </div>
  );
};

export default DonateCard;
