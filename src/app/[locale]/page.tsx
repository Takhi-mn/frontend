import { useTranslations } from "next-intl";
import {
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
import TourismSection from "@/components/tourismSection/TourismSection";

export default function Index() {
  const t = useTranslations("Index");
  const p = useTranslations("Policy");
  const s = useTranslations("Subscribe");
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <div className="w-full p-6 sm:p-16 sm:px-28">
        <h1 className="text-center my-16 text-3xl font-medium">{t("work")}</h1>
        <OurWorkSelector />
      </div>
      <TourismSection />
      <div className="w-full p-6 sm:p-16 sm:px-28">
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
      <Policy policy={p("policy")} text={p("text")} accept={p("accept")} />
    </div>
  );
}
