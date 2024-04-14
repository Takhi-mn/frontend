"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const TakhiEcoCampPage = (props: Props) => {
  const { selectedLanguage } = useLanguage();
  redirect(`/${selectedLanguage}/tourism`);
  return <div>TakhiEcoCampPage</div>;
};

export default TakhiEcoCampPage;
