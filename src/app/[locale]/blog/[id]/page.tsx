import React from "react";
import BlogPage from "../components/blogById/blogPage";
import { blogsData } from "@/data/blog";

const BlogByIdPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      {params.id}
      <BlogPage id={params.id} blogData={blogsData[0]} />
    </div>
  );
};

export default BlogByIdPage;
