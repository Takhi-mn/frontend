import { useTranslations } from "next-intl";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UpperSection from "./components/upperSection";
import DonationWithType from "./components/donationWithType";
import AdoptionInfo from "./adoption/components/AdoptionInfo";

export const metadata: Metadata = {
  title: "Takhi | Donation",
  description:
    "Rangers related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs, takhi adoption",
  keywords:
    "takhi donation, takhi team,takhi rangers,Indigenous Community Interactions,Khomyn Talyn Cultural Experiences, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, Wild Horse Conservation, Przewalski's Horse, Endangered Species Sanctuary, Biodiversity Conservation, Rare Wildlife Encounters,Saiga Antelope Mongolia, user review,review ",
};

const DonationPage = () => {
  const t = useTranslations("Index");
  return (
    <div className="flex flex-col container justify-center w-full items-center max-w-[1074px] mb-10">
      <UpperSection donateText={t("donateText")} />
      <div className="flex justify-center sm:gap-32 mt-20 mb-20">
        <Button className="shadow-lg px-16 py-8 ">Donation</Button>
        <Link href={"./donation/adoption"}>
          <Button className="shadow-lg px-16 py-8 bg-white text-black">
            Adoption
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-20">
        <DonationWithType />
        <AdoptionInfo />
      </div>
    </div>
  );
};

export default DonationPage;
