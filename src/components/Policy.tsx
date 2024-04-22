"use client";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "./ui/button";
type Props = {};

const Policy = (props: Props) => {
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
      className={`fixed z-50 bottom-8 right-8 
    bg-background shadow-xl w-[400px] p-5 rounded-xl ${!open && "hidden"}`}
    >
      <IoClose
        onClick={() => {
          setOpen(false);
        }}
        className="absolute right-5"
        size={25}
      />
      <div>
        <h3 className="font-semibold text-xl">Policy</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          temporibus similique. Commodi quas, neque libero
        </p>
        <div className="mt-4">
          <Button
            onClick={() => {
              handlePolicy("accepted");
            }}
            className="px-10"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Policy;
