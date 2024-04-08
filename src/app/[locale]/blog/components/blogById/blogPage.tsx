import React from "react";
import { Button } from "@/components/ui/button";
import { IoShareSocialOutline } from "react-icons/io5";
import BlogComment from "./blogComment";

import { IBlogComment } from "@/types/blog";
import WriteCommentSection from "./writeCommentSection";
import BlogSection from "@/components/blogSection";

const BlogPage = ({ blogData }: any) => {
  return (
    <div className="container gap-16 flex flex-col sm:gap-28 ">
      {/* Blog Section */}
      <div className=" flex flex-col gap-4">
        <h1 className="text-[32px] font-semibold sm:text-[64px]">
          {blogData.title}
        </h1>
        <div>
          <p className="text-[12px] sm:text-lg">{blogData.date}</p>
          <div className="flex justify-between items-center">
            <p className="text-[12px] sm:text-[22px] sm:font-semibold">
              {blogData.userName}
            </p>
            <Button className=" text-black text-[12px] sm:text-lg gap-2 bg-white">
              Share <IoShareSocialOutline />
            </Button>
          </div>
        </div>
      </div>
      <p className="text-[12px] sm:text-[22px] sm:px-56">{blogData.blog}</p>
      {/* Comment Section */}
      <div className="flex flex-col gap-8 sm:max-w-[60%]">
        <h1 className="sm:text-[22px]">Comments</h1>
        <div className="flex flex-col gap-4">
          {blogData.comments.map((comment: IBlogComment) => (
            <BlogComment commentData={comment} />
          ))}
        </div>
      </div>
      {/* WriteComment Section */}
      <WriteCommentSection />
      {/* Read More */}

      <div className="hidden sm:flex flex-col gap-10">
        <h1 className="text-[32px] font-bold">Read More</h1>
        <BlogSection />
      </div>
    </div>
  );
};

export default BlogPage;
