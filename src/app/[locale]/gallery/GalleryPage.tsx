"use client";
import { getGallerys } from "@/actions/getGallerys";
import PhotoSlider from "@/components/photoSlider";
import SkeletonLoader from "@/components/skeleton";
import { useLanguage } from "@/context/LanguageProvider";
import { nameConverter } from "@/lib/nameConverter";
import { INews } from "@/types/backend";
import React, { useEffect, useState } from "react";

type Props = {};

const GalleryPageComp = (props: Props) => {
  const [gallerys, setGallerys] = useState<INews[]>();
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    getGallerys().then((data) => setGallerys(data));
  }, []);
  return (
    <>
      {gallerys ? (
        <div className="w-full hidden md:flex flex-col items-center mt-10">
          {gallerys?.map((gallery) => (
            <div key={gallery.id}>
              <h1 className="text-center text-2xl font-medium">
                {nameConverter(gallery, selectedLanguage)}
              </h1>
              <PhotoSlider photos={gallery.images} />
            </div>
          ))}
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};

export default GalleryPageComp;
