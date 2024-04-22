"use client";
import React, { useContext, useEffect } from "react";
import BlogCard from "./BlogCard";
import { dataContext } from "@/context/DataProvider";

const BlogCardSection = () => {
  const { blogs, getBlogs } = useContext(dataContext);

  useEffect(() => {
    if (!blogs) {
      getBlogs();
    }
  }, []);
  return (
    <div className="flex flex-wrap gap-2 md:justify-between justify-center">
      <BlogCard blogData={blogs ? blogs[0] : undefined} />
      <BlogCard blogData={blogs ? blogs[1] : undefined} />
      <BlogCard blogData={blogs ? blogs[2] : undefined} />
    </div>
  );
};

export default BlogCardSection;
