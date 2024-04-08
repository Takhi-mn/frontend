"use client";
import React from "react";
import Rating from "./Rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IPropsBlogData } from "@/types/blog";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";

const BlogCard = ({ blogData }: IPropsBlogData) => {
  const router = useRouter();
  const { selectedLanguage } = useLanguage();
  return (
    <div className=" min-w-[300px] max-w-[390px] flex flex-col rounded-[8px] bg-muted p-5 gap-3">
      <div
        onClick={() =>
          router.push(
            `http://localhost:3000/${selectedLanguage}/blog/${blogData.id}`
          )
        }
        className="hover:cursor-pointer flex flex-col gap-3"
      >
        <h1 className="text-xl font-bold line-clamp-2 ">{blogData.title}</h1>
        <p className="line-clamp-6">{blogData.blog}</p>
      </div>
      <div className="flex justify-between mt-5 w-full">
        <Rating />
        <p className="font-extrabold ">{blogData.date}</p>
      </div>
      <div className="flex gap-3 items-center">
        <Avatar className="mt-3">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3 className="font-extrabold">{blogData.userName}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
