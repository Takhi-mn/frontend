import { useTranslations } from "next-intl";
import { Metadata } from "next";
import AdoptionPage from "./components/adoptPage";
import AdoptionInfo from "./components/AdoptionInfo";

export const metadata: Metadata = {
  title: "Takhi | Adoption",
  description:
    "Rangers related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs, takhi adoption",
  keywords:
    "takhi adoption, takhi team,takhi rangers,Indigenous Community Interactions,Khomyn Talyn Cultural Experiences, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, Wild Horse Conservation, Przewalski's Horse, Endangered Species Sanctuary, Biodiversity Conservation, Rare Wildlife Encounters,Saiga Antelope Mongolia, user review,review ",
};

type Props = {};

const AdoptionPageMain = (props: Props) => {
  const t = useTranslations("Index");
  return (
    <div className="container mb-20">
      <AdoptionPage donateText={t("donateText")} />
      <AdoptionInfo />
    </div>
  );
};

export default AdoptionPageMain;
