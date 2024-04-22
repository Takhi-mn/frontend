import { Metadata } from "next";

import TakhiConservationPrograms from "./components/pageComponent";

export const metadata: Metadata = {
  title: "Takhi | Conservation Program",
  description:
    "Works related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs ",
  keywords:
    "takhi, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, Wild Horse Conservation, Przewalski's Horse, Endangered Species Sanctuary, Biodiversity Conservation, Rare Wildlife Encounters,Saiga Antelope Mongolia ",
};

const TakhiConservationProgramsPage = () => {
  return <TakhiConservationPrograms />;
};

export default TakhiConservationProgramsPage;
