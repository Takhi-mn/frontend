import { logo } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

type Props = {
  company1: string;
  company2: string;
  company3: string;
};

const Footer = ({ company1, company2, company3 }: Props) => {
  return (
    <footer className=" sm:p-16 p-6 bg-secondary">
      <div className="flex sm:block flex-col items-center">
        <div className="flex gap-5 sm:ml-4 ml-0">
          <FaFacebookF size={25} />
          <FaTwitter size={25} />
          <FaYoutube size={25} />
        </div>
        <Image src={logo.src} width={200} height={170} alt="logo" />
        <h2 className="text-3xl font-semibold">Born To Be Wild</h2>
        <p className="mt-7 pt-3 border-t-2">&#169; {company1}</p>
        <p>{company2}</p>
        <p>{company3}</p>
      </div>

      <section></section>
    </footer>
  );
};

export default Footer;
