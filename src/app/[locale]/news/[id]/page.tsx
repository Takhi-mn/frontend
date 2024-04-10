"use client";
import { useDataContext } from "@/context/DataProvider";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import Image from "next/image";
import { useEffect } from "react";
import OneNewsPageSkeleton from "./OneNewsPageSkeleton";
import OneNews from "./OneNews";

const OneNewsPage = ({ params }: { params: { id: string } }) => {
  const { getNewsById, oneNews } = useDataContext();
  useEffect(() => {
    getNewsById(params.id);
  }, []);
  return (
    <div>{oneNews ? <OneNews news={oneNews} /> : <OneNewsPageSkeleton />}</div>
  );
};

export default OneNewsPage;
