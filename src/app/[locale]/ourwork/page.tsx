import React from "react";
import { useTranslations } from "next-intl";
import OurWorkPage from "./components/ourWorkPage";

const OurWork = () => {
  const index = useTranslations("Index");
  return (
    <div>
      <OurWorkPage />
    </div>
  );
};

export default OurWork;
