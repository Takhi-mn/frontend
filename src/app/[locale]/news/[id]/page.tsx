"use client";
import { useDataContext } from "@/context/DataProvider";
import { useEffect } from "react";
import OneNewsPageSkeleton from "./OneNewsPageSkeleton";
import OneNews from "./OneNews";
import { useLanguage } from "@/context/LanguageProvider";

const OneNewsPage = ({ params }: { params: { id: string } }) => {
  const { getNewsById, oneNews } = useDataContext();
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    getNewsById(params.id);
  }, []);
  return (
    <div>
      {oneNews ? (
        <OneNews news={oneNews} selectedLanguage={selectedLanguage} />
      ) : (
        <OneNewsPageSkeleton />
      )}
    </div>
  );
};

export default OneNewsPage;
