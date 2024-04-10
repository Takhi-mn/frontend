"use client";
import { donateValues } from "@/data";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
type Props = {
  donate: string;
  once: string;
  monthly: string;
};

const DonateWithMailSection = ({ donate, once, monthly }: Props) => {
  const [selected, setSelected] = useState<number | string>();
  return (
    <div className="bg-white text-black rounded-md p-2 md:p-10 flex flex-col gap-2 flex-1">
      <div className="sm:hidden flex flex-col gap-10">
        <h1 className="text-center text-3xl md:5xl font-medium">{donate}</h1>
        <div className="flex flex-col">
          <div className="flex justify-around">
            <Button className="shadow-lg px-10 py-6">Donation</Button>
            <Button className="shadow-lg px-10 py-6">Adoption</Button>
          </div>
          <Button className="bg-[#F9FAFB] text-black shadow-lg px-10 py-6 my-14 max-w-[227px] self-center">
            Choose Donation
          </Button>
        </div>
      </div>
      <div className="text-center flex flex-wrap md:justify-center">
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
      <RadioGroup
        defaultValue="comfortable"
        className="flex justify-center gap-10 p-10"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="once" id="r1" className="md:w-8 md:h-8" />
          <Label htmlFor="r1">{once}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="monthly" id="r2" className="md:w-8 md:h-8" />
          <Label htmlFor="r2">{monthly}</Label>
        </div>
      </RadioGroup>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Emanil Address</p>
          <Input placeholder="Write tourist number here" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Country</p>
          <Input placeholder="Mongolia" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Card Number</p>
          <Input placeholder="Write card number here" />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-sm">CVV</p>
            <Input placeholder="***" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Expiry Date</p>
            <Input placeholder="mm/dd/yyyy" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button className="w-full md:w-2/3 md:mt-20 py-7 text-xl">
          {donate}
        </Button>
      </div>

      <p className="text-xs text-center">
        If you wish to see the impacts of your donation,{" "}
        <span className="text-primary">click here</span>{" "}
      </p>
    </div>
  );
};

export default DonateWithMailSection;
