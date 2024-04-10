import BlogCard from "@/components/blogSection/BlogCard";
import BlogModal from "@/components/blogSection/BlogModal";
import { blogsData } from "@/data/blog";
import { IBlogData } from "@/types/blog";
import React from "react";

const AllBlogPage = () => {
  return (
    <div className="container flex flex-col gap-8 mb-10 pt-3">
      <div className="flex justify-between items-center">
        <h1 className="text-[32px] font-semibold sm:text-[64px]">Blog</h1>
        <BlogModal />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center items-center">
        {blogsData.map((blogData: IBlogData, index) => (
          <BlogCard key={blogData.id + index} blogData={blogData} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogPage;
