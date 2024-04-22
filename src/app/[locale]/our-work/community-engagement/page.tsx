import { Metadata } from "next";

import CommunityEngagement from "./components/page-comp";

export const metadata: Metadata = {
  title: "Takhi | Community Engagement",
  description:
    "Works related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs ",
  keywords:
    "takhi, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, Wild Horse Conservation, Przewalski's Horse, Endangered Species Sanctuary, Biodiversity Conservation, Rare Wildlife Encounters,Saiga Antelope Mongolia ",
};

const CommunityEngagementPage = () => {
  return <CommunityEngagement />;
};

export default CommunityEngagementPage;
