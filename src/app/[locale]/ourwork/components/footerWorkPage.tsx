import Link from "next/link";
import React from "react";

const FooterWorkPage = () => {
  return (
    <div className="flex h-[100px] bg-black fixed z-10 bottom-0 w-screen">
      <Link
        href=""
        className="text-[16px] font-[500] text-[#FFA45B] flex-1 flex items-center justify-center"
      >
        TAKHI REINTRODUCTION
      </Link>
      <Link
        href=""
        className="text-[16px] font-[500] text-[#FFA45B] flex-1 flex items-center justify-center"
      >
        SUPPORTING LOCAL COMMUNITY DEVELOPMENT
      </Link>
      <Link
        href=""
        className="text-[16px] font-[500] text-[#FFA45B] flex-1 flex items-center justify-center"
      >
        WILDLIFE CONSERVATION
      </Link>
      <Link
        href=""
        className="text-[16px] font-[500] text-[#FFA45B] flex-1 flex items-center justify-center"
      >
        RESEARCH PROGRAM
      </Link>
      <Link
        href=""
        className="text-[16px] font-[500] text-[#FFA45B] flex-1 flex items-center justify-center"
      >
        NATIONAL PARK MANAGEMENT
      </Link>
      <Link
        href=""
        className="text-[16px] font-[500] text-[#FFA45B] flex-1 flex items-center justify-center"
      >
        RESOURCES
      </Link>
    </div>
  );
};

export default FooterWorkPage;
