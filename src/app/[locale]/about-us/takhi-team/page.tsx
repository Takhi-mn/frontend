import TakhiTeam from "./components/takhi-team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Takhi | About us",
  description:
    "Rangers related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs ",
  keywords:
    "takhi team,takhi rangers,Indigenous Community Interactions,Khomyn Talyn Cultural Experiences, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, Wild Horse Conservation, Przewalski's Horse, Endangered Species Sanctuary, Biodiversity Conservation, Rare Wildlife Encounters,Saiga Antelope Mongolia ",
};

const TakhiTeamPage = () => {
  return <TakhiTeam />;
};

export default TakhiTeamPage;
