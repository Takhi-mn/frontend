import Link from "next/link";
import React from "react";
import { footerText } from "@/data/ourwork";

const FooterWorkPage = () => {
  return (
    <div className="flex h-[100px] bg-transparent fixed z-10 bottom-0 w-screen">
      {footerText.map((data) => (
        <Link
          key={data.titleEn}
          href={"/en/" + `${data.url}`}
          className="text-[16px] font-[500] text-primary flex-1 flex items-center justify-center text-center cursor-pointer"
        >
          {data.titleEn}
        </Link>
      ))}
    </div>
  );
};

export default FooterWorkPage;
