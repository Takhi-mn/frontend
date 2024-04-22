"use client";
import BlogCard from "@/components/blogSection/BlogCard";
import { dataContext } from "@/context/DataProvider";
import { IBlog } from "@/types/backend";
import React, { useContext, useEffect } from "react";

const Blogs = () => {
  const { blogs, getBlogs } = useContext(dataContext);

  useEffect(() => {
    if (!blogs) {
      getBlogs();
    }
  }, []);
  console.log("BLOGS", blogs);
  return (
    <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center items-center">
      {blogs?.map((blog: IBlog, index) => (
        <BlogCard key={blog.id + index} blogData={blog} />
      ))}
    </div>
  );
};

export default Blogs;
