import { Metadata } from "next";
import BlogPage from "../components/blogById/blogPage";
import BlogSection from "@/components/blogSection";

export const metadata: Metadata = {
  title: "Takhi | Blogs",
  description:
    "Rangers related by takhi, takhi community engagement,takhi national park managament,takih research and monitoring program,takhi conservation programs ",
  keywords:
    "takhi team,takhi rangers,Indigenous Community Interactions,Khomyn Talyn Cultural Experiences, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, Wild Horse Conservation, Przewalski's Horse, Endangered Species Sanctuary, Biodiversity Conservation, Rare Wildlife Encounters,Saiga Antelope Mongolia, user review,review ",
};

const BlogByIdPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container">
      <BlogPage id={params.id} />

      <div className="flex flex-col gap-10">
        <h1 className="text-[32px] font-bold mt-10">Read More</h1>
        <BlogSection />
      </div>
    </div>
  );
};

export default BlogByIdPage;
