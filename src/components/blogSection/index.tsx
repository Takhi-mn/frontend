import React from "react";
import BlogCard from "./BlogCard";
import { Button } from "../ui/button";
import BlogModal from "./BlogModal";

import { blogsData } from "@/data/blog";

type Props = {};

const BlogSection = (props: Props) => {
  return (
    <section>
      <div className="flex flex-wrap gap-2 md:justify-between justify-center">
        <BlogCard blogData={blogsData[0]} />
        <BlogCard blogData={blogsData[1]} />
        <BlogCard blogData={blogsData[2]} />
      </div>
      <div className="text-center mt-7">
        <BlogModal />
      </div>
    </section>
  );
};

export default BlogSection;
