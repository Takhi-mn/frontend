import {
  PartnerSection,
  Footer,
  Policy,
  HeroSection,
  MapSection,
} from "@/components";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  const f = useTranslations("Footer");
  const l = useTranslations("Language");
  return (
    <div>
      <HeroSection />
      <Footer
        company1={f("company1")}
        company2={f("company2")}
        company3={f("company3")}
        news={f("news")}
        donate={f("donate")}
        privacy={f("privacy")}
        terms={f("terms")}
        language={l("language")}
      />
      <Policy />
    </div>
  );
}
