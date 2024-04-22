import { Metadata } from "next";
import AllBlogPage from "./components/allBlogPage";

export const metadata: Metadata = {
  title: "Takhi | Blogs",
  description:
    "Rangers related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs ",
  keywords:
    "takhi team,takhi rangers,Indigenous Community Interactions,Khomyn Talyn Cultural Experiences, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, Wild Horse Conservation, Przewalski's Horse, Endangered Species Sanctuary, Biodiversity Conservation, Rare Wildlife Encounters,Saiga Antelope Mongolia, user review,review ",
};

const Blog = () => {
  return (
    <div>
      <AllBlogPage />
    </div>
  );
};

export default Blog;
