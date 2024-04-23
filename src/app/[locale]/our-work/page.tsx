import OurWorkPage from "./components/ourWorkPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Takhi | Our Work",
  description:
    "Works related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs ",
  keywords:
    "takhi, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, Wild Horse Conservation, Przewalski's Horse, Endangered Species Sanctuary, Biodiversity Conservation, Rare Wildlife Encounters,Saiga Antelope Mongolia ",
};

const OurWork = () => {
  return (
    <div className="w-full">
      <OurWorkPage />
    </div>
  );
};

export default OurWork;
