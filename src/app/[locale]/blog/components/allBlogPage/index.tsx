import BlogCard from "@/components/blogSection/BlogCard";
import BlogModal from "@/components/blogSection/BlogModal";
import { blogsData } from "@/data/blog";
import { IBlogData } from "@/types/blog";
import { useTranslations } from "next-intl";
import React from "react";
import Blogs from "./blogs";

const AllBlogPage = () => {
  const b = useTranslations("Blog");
  return (
    <div className="container flex flex-col gap-8 mb-10 pt-3">
      <div className="flex justify-between items-center">
        <h1 className="text-[32px] font-semibold sm:text-[64px]">Blog</h1>
        <BlogModal
          write={b("write")}
          name={b("name")}
          email={b("email")}
          emailPlace={b("emailPlace")}
          title={b("title")}
          titlePlace={b("titlePlace")}
          review={b("review")}
          reviewPlace={b("reviewPlace")}
          namePlace={b("namePlace")}
          send={b("send")}
        />
      </div>
      <Blogs />
    </div>
  );
};

export default AllBlogPage;
