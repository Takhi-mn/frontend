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
      } relative w-full min-h-44 transform transition-all hover:scale-105`}
      onClick={() => router.push(`${data.url}`)}
    >
      <Image
        src={data.img}
        // width={0}
        // height={0}
        // sizes="100vw"
        fill
        alt={data.title}
        style={{ borderRadius: "8px", objectFit: "cover" }}
      />
      <h1 className="font-bold text-lg absolute text-white z-10 bottom-5 left-5">
        {data.title}
      </h1>
    </div>
  );
};

export default OurWorkPageCard;
