import {
  PartnerSection,
  Footer,
  Policy,
  HeroSection,
  MapSection,
  OurWorkSelector,
  Subscribe,
} from "@/components";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  const f = useTranslations("Footer");
  const l = useTranslations("Language");
  const s = useTranslations("Subscribe");
  return (
    <div>
      <HeroSection />
      <div className="w-full sm:p-16 sm:px-28">
        <OurWorkSelector />
        <MapSection />
      </div>
      <Subscribe
        subscribe={s("subscribe")}
        notify={s("notify")}
        email={s("email")}
        submit={s("submit")}
      />

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
