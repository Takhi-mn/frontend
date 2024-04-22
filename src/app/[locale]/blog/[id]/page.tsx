// "use client";

import React, { useContext, useEffect } from "react";
import BlogPage from "../components/blogById/blogPage";
import { dataContext } from "@/context/DataProvider";
import BlogSection from "@/components/blogSection";

const BlogByIdPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container">
      <BlogPage id={params.id} />

      <div className="hidden sm:flex flex-col gap-10">
        <h1 className="text-[32px] font-bold">Read More</h1>
        <BlogSection />
      </div>
    </div>
  );
};

export default BlogByIdPage;
