"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { redirect } from "next/navigation";

const AboutUsRedirectPage = () => {
  const { selectedLanguage } = useLanguage();
  redirect(`/${selectedLanguage}/about-us`);
  return <div>TakhiEcoCampPage</div>;
};

export default AboutUsRedirectPage;
