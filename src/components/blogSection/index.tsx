import React from "react";
import BlogCard from "./BlogCard";
import { Button } from "../ui/button";
import BlogModal from "./BlogModal";

type Props = {};

const BlogSection = (props: Props) => {
  return (
    <section>
      <div className="flex flex-wrap gap-2 md:justify-between justify-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="text-center mt-7">
        <BlogModal />
      </div>
    </section>
  );
};

export default BlogSection;
