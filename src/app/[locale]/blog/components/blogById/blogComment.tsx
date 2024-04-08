import React from "react";
import { IPropsBlogComment } from "@/types/blog";
import Image from "next/image";

const BlogComment = ({ commentData }: IPropsBlogComment) => {
  return (
    <div className="flex flex-col justify-center gap-3 bg-[#F9FAFB] rounded-[6px]">
      {/* Image and Name section */}
      <div className="flex items-center gap-2 w-full">
        <div className="w-9 h-9 relative sm:w-[46px] sm:h-[46px]">
          <Image
            src={commentData.userImage}
            fill
            className="rounded-full"
            objectFit="cover"
            alt={commentData.userName}
          />
        </div>
        <h1 className="text-[10.8px] font-bold sm:text-[14.4px]">
          {commentData.userName}
        </h1>
      </div>
      {/* Comment */}
      <p className="text-[10.8px] sm:text-[14.4px]">{commentData.comment}</p>
      {/* Date */}
      <h1 className="font-semibold text-[10.8px] sm:text-[14.4px]">
        {commentData.date}
      </h1>
    </div>
  );
};

export default BlogComment;
