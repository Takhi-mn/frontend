import GalleryHeader from "./GalleryHeader";
import GalleryPageComp from "./GalleryPage";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Takhi | Gallery",
  description: "Photos of nature, takhi, khomyn tal and other",
  keywords:
    "Wildlife Photography Īours, Nature Photo Expeditions, Įandscape Photography Workshops, Īakhi Conservation Photography, Unique Wildlife Captures",
};

const GalleryPage = (props: Props) => {
  return (
    <div className="bg-background text-foreground">
      <GalleryHeader />
      <GalleryPageComp />
    </div>
  );
};

export default GalleryPage;
