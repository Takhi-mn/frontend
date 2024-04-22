import { Metadata } from "next";
import FaqPageComponent from "./FaqPageComponent";
import { Accordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Takhi | FAQ",
  description:
    "Answers related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs, takhi adoption",
  keywords:
    "takhi adoption, takhi team,takhi rangers,Indigenous Community Interactions,Khomyn Talyn Cultural Experiences, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, Wild Horse Conservation, Przewalski's Horse, Endangered Species Sanctuary, Biodiversity Conservation, Rare Wildlife Encounters,Saiga Antelope Mongolia, user review,review ",
};

type Props = {};

const FaqPage = (props: Props) => {
  return (
    <div className="w-full p-6 sm:p-16 sm:px-28 min-h-[60vh]">
      <Accordion type="single" collapsible className="w-full">
        <FaqPageComponent />
      </Accordion>
    </div>
  );
};

export default FaqPage;
