import React from "react";
import GalleryHeader from "./GalleryHeader";
import { animalImages } from "@/data/camp";
import PhotoSlider from "@/components/photoSlider";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";

type Props = {};

const GalleryPage = (props: Props) => {
  return (
    <div className="bg-background text-foreground">
      <GalleryHeader />
      <div className="w-full hidden md:flex flex-col items-center mt-10">
        <div>
          <h1 className="text-center text-2xl font-medium">Landscape</h1>
          <PhotoSlider photos={animalImages} />
        </div>
        <div>
          <h1 className="text-center text-2xl font-medium">
            141 species of bird recorded in Khomyn tal
          </h1>
          <PhotoSlider photos={animalImages} />
        </div>
        <div>
          <h1 className="text-center text-2xl font-medium">Fauna</h1>
          <PhotoSlider photos={animalImages} />
        </div>
      </div>
      <div className="w-full md:hidden flex flex-col items-center mt-10">
        <div>
          <h1 className="text-center text-2xl font-medium">Landscape</h1>
          <PhotoSliderSmall photos={animalImages} />
        </div>
        <div>
          <h1 className="text-center text-2xl font-medium">
            141 species of bird recorded in Khomyn tal
          </h1>
          <PhotoSliderSmall photos={animalImages} />
        </div>
        <div>
          <h1 className="text-center text-2xl font-medium">Fauna</h1>
          <PhotoSliderSmall photos={animalImages} />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
