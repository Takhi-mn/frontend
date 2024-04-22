"use client";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { INews } from "@/types/backend";

type Props = {
  data: INews;
  selectedLanguage: any;
};

const CampSection2 = ({ data, selectedLanguage }: Props) => {
  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold mb-14 text-center">
        {nameConverter(data, selectedLanguage)}
      </h1>
      <p
        className="Prosemirror"
        dangerouslySetInnerHTML={{
          __html: contentConverter(data, selectedLanguage),
        }}
      ></p>

      <PhotoSliderSmall photos={data.images} />
    </div>
  );
};

export default CampSection2;
