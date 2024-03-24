import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Policy from "@/components/Policy";
import Tree from "@/components/tree";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  const f = useTranslations("Footer");
  return (
    <div>
      <PartnerSection />
      <Footer
        company1={f("company1")}
        company2={f("company2")}
        company3={f("company3")}
      />
      <Policy />
    </div>
  );
}
