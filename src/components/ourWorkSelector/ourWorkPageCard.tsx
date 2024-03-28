"use client";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import "./style.css";
import { useRouter } from "next/navigation";

const OurWorkPageCard = ({ data, index }: any) => {
  const router = useRouter();
  return (
    <div
      className={`${
        "s" + index
      } relative w-full min-h-44 group overflow-hidden`}
      onClick={() => router.push(`${data.url}`)}
    >
      <Image
        src={data.img}
        // width={0}
        // height={0}
        // sizes="100vw"
        className="transform duration-700 transition-all group-hover:scale-125"
        fill
        alt={data.title}
        style={{ borderRadius: "8px", objectFit: "cover" }}
      />

      <h1 className="font-bold text-lg absolute text-white z-10 bottom-5 left-5 duration-700 transform transition-all group-hover:bg-black group-hover:bg-opacity-30 px-1 py-2 group-hover:rounded-md">
        {data.title}
      </h1>
    </div>
  );
};

export default OurWorkPageCard;
