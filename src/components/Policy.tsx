"use client";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "./ui/button";
type Props = {
  policy: string;
  text: string;
  accept: string;
};

const Policy = ({ policy, text, accept }: Props) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const policy = localStorage.getItem("policy");
    if (!policy) {
      setTimeout(() => {
        setOpen(true);
      }, 2000);
    }
  }, []);
  const handlePolicy = (value: string) => {
    localStorage.setItem("policy", value);
    setOpen(false);
  };

  return (
    <div
      className={`fixed z-50 bottom-8 right-4
    bg-background shadow-xl w-[350px] p-5 rounded-xl ${!open && "hidden"}`}
    >
      <IoClose
        onClick={() => {
          setOpen(false);
        }}
        className="absolute right-5"
        size={25}
      />
      <div>
        <h3 className="font-semibold text-xl">{policy}</h3>
        <p>{text}</p>
        <div className="mt-4">
          <Button
            onClick={() => {
              handlePolicy("accepted");
            }}
            className="px-10"
          >
            {accept}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Policy;
