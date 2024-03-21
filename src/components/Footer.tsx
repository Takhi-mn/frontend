import { logo } from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-screen sm:p-16 p-6 bg-secondary">
      <Image src={logo.src} width={80} height={56} alt="logo" />
      <section></section>
    </footer>
  );
};

export default Footer;
