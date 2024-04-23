"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { redirect } from "next/navigation";

const DonationRedirectPage = () => {
  const { selectedLanguage } = useLanguage();
  redirect(`/${selectedLanguage}/donation`);
  return <div>TakhiEcoCampPage</div>;
};

export default DonationRedirectPage;
