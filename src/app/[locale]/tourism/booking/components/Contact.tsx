import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="w-full mt-12">
      <h1 className="text-3xl text-center">CONTACT</h1>
      <div className="md:flex gap-5 mt-5">
        <div className="bg-zinc-100 flex flex-col justify-center items-center gap-3 mt-5 p-5 rounded-md text-black md:flex-1">
          <FaLocationDot size={40} />
          <p>Zavhan Province, Durvuljin Sum, Onts bag</p>
        </div>
        <div className="bg-zinc-100 flex flex-col justify-center items-center gap-3 mt-5 p-5 rounded-md text-black md:flex-1">
          <IoCall size={40} />
          <p>70004480, 98159903</p>
        </div>
        <div className="bg-zinc-100 flex flex-col justify-center items-center gap-3 mt-5 p-5 rounded-md text-black md:flex-1">
          <IoMdMail size={40} />
          <p>Takhi@ktt.mn</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
