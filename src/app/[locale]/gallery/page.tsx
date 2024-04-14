import React from "react";
import GalleryHeader from "./GalleryHeader";
import { animalImages } from "@/data/camp";
import PhotoSlider from "@/components/photoSlider";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import GalleryPageComp from "./GalleryPage";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Takhi | Gallery",
  description: "Photos of nature, takhi, khomyn tal and other",
  keywords:
    "takhi, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, horse, Przewalski, photos, nature photo ",
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
