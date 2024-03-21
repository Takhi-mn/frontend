import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <div>
      <Navbar donate={t("donate")} />
      <PartnerSection />
    </div>
  );
}
