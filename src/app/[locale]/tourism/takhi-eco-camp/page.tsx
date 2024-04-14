"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const { selectedLanguage } = useLanguage();
  redirect(`/${selectedLanguage}/tourism`);
  return <div>page</div>;
};

export default page;
