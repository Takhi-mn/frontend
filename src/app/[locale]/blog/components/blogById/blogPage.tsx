"use client";
import React, { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoShareSocialOutline } from "react-icons/io5";
import BlogComment from "./blogComment";

import { IBlogComment } from "@/types/blog";
import WriteCommentSection from "./writeCommentSection";
import BlogSection from "@/components/blogSection";
import { IBlog } from "@/types/backend";
import { dateFormatter } from "@/lib/dateFormatter";
import { dataContext } from "@/context/DataProvider";
import SkeletonLoader from "@/components/skeleton";

interface IProps {
  // blogData: IBlog | undefined;
  id: string;
}

const BlogPage = ({ id }: IProps) => {
  const { blogs, getBlogs } = useContext(dataContext);

  useEffect(() => {
    if (!blogs) {
      getBlogs();
    }
  }, []);

  const filteredBlog = blogs?.filter((blog) => blog.id === id);

  const blogData = filteredBlog ? filteredBlog[0] : undefined;
  return (
    <>
      {blogs ? (
        <div className="gap-16 flex flex-col sm:gap-28 ">
          {/* Blog Section */}
          <div className=" flex flex-col gap-4">
            <h1 className="text-[32px] font-semibold sm:text-[64px]">
              {blogData?.name_mn}
            </h1>
            <div>
              <p className="text-[12px] sm:text-lg">
                {dateFormatter(blogData?.createdAt)}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] sm:text-[22px] sm:font-semibold">
                  {blogData?.fullname}
                </p>
                <Button className=" text-black text-[12px] sm:text-lg gap-2 bg-white">
                  Share <IoShareSocialOutline />
                </Button>
              </div>
            </div>
          </div>
          <p
            className="text-[12px] sm:text-[22px] sm:px-56"
            dangerouslySetInnerHTML={{
              __html: blogData ? blogData.content_mn : "",
            }}
          ></p>
          {/* Comment Section */}
          {/* <div className="flex flex-col gap-8 sm:max-w-[60%]">
      <h1 className="sm:text-[22px]">Comments</h1>
      <div className="flex flex-col gap-4">
        {blogData.comments.map((comment: IBlogComment, index: number) => (
          <BlogComment key={comment.date + index} commentData={comment} />
        ))}
      </div>
    </div> */}
          {/* WriteComment Section */}
          {/* <WriteCommentSection /> */}
          {/* {/* Read More */}
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};

export default BlogPage;
