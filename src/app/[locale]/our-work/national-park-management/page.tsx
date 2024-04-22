import { Metadata } from "next";

import NationalParkManagement from "./components/page-comp";

export const metadata: Metadata = {
  title: "Takhi | National And Monitoring Programs",
  description:
    "Works related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs ",
  keywords:
    "takhi, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, Wild Horse Conservation, Przewalski's Horse, Endangered Species Sanctuary, Biodiversity Conservation, Rare Wildlife Encounters,Saiga Antelope Mongolia ",
};

const NationalParkManagementPage = () => {
  return <NationalParkManagement />;
};

export default NationalParkManagementPage;
