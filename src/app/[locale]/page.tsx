import { useTranslations } from "next-intl";
import { Component } from "@/components";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Component />
    </div>
  );
}
