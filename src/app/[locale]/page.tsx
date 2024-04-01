import {
  PartnerSection,
  Footer,
  Policy,
  HeroSection,
  MapSection,
  OurWorkSelector,
  Subscribe,
} from "@/components";
import BlogSection from "@/components/blogSection";

import DonateSection from "@/components/donateSection";
import HistorySection from "@/components/historySection";
import NewsSection from "@/components/newsSection";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");

  const s = useTranslations("Subscribe");
  return (
    <div>
      <HeroSection />
      <div className="w-full p-6 sm:p-16 sm:px-28">
        <h1 className="text-center my-16 text-3xl font-medium">{t("work")}</h1>
        <OurWorkSelector />
        <h1 className="text-center my-16 text-3xl font-medium">{t("place")}</h1>
        <MapSection />
        <h1 className="text-center my-16 text-3xl font-medium">
          {t("history")}
        </h1>
        <HistorySection />
      </div>
      <DonateSection
        today={t("today")}
        donate={t("donate")}
        donateText={t("donateText")}
        once={t("once")}
        monthly={t("monthly")}
      />

      <div className="w-full p-6 sm:p-16 sm:px-28">
        <NewsSection />
      </div>
      <Subscribe
        subscribe={s("subscribe")}
        notify={s("notify")}
        email={s("email")}
        submit={s("submit")}
      />
      <div className="w-full p-6 sm:p-16 sm:px-28">
        <BlogSection />
      </div>
      <Policy />
    </div>
  );
}
