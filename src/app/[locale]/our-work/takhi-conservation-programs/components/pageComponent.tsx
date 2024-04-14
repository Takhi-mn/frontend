"use client";
import React, { useContext, useEffect } from "react";
import IntroSection from "./intro-section";
import PhotoSliderSection from "./photo-slider-section";
import CardPhoto from "./card-photo";
import HeroSection from "./hero-section";
import LearnMoreSection from "../../components/learnMoreSection";
import { coll1, coll2, coll3, coll4, map } from "@/assets";
import { dataContext } from "@/context/DataProvider";
import { useLanguage } from "@/context/LanguageProvider";
import MapRISection from "./map-section";
import MapRISection1 from "./map-section-1";
import PhotoSliderReIntro from "./photo-section-reintro";

const TakhiConservationPrograms = () => {
  const { getOurworks, ourworks } = useContext(dataContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!ourworks) {
      getOurworks();
    }
  });

  const datas = [
    {
      title: "Fauna",
      images: [coll1.src, coll2.src, coll3.src, coll4.src],
      desc: "Being such an island, it is a safe home for many species of wildlife. In some cases, it might stand as the last refuge of wild animals. For example, 200 individuals of Mongolian gazelle were translocated into Khomyn Tal from Eastern Mongolia after a sharp decline in number and distribution range of the gazelle in Western Mongolia in the 1980s. Hence, the population has been greatly increasing from hundreds to several thousands with extended distribution area outside the Great Lakes Depression.  Since 2004, Przewalski’s horses, endangered species that was extinct in the wild, are also returning to Khomyn Tal through an integrated conservation effort to increase the value of regional biodiversity. As a result of this work, most wildlife populations are on the increase while some threatened species that had disappeared in the area such as Saiga antelope and Pelicans are coming back to Khomyn Tal. The fenced reintroduction site of Seeriin Nuruu in the eastern part of Khomyn Tal became a favorable habitat for wildlife. Pasture condition in the fenced area has significantly improved leading to biodiversity richness - willows and sea buckthorn along Zavkhan riverbed have grown into a thick, wide forest strip and wildlife populations have been increasing year by year.      In total, 46 mammals species are found in Khomyn Tal, seven of which are listed in the IUCN Red List and the Red List of Mongolia. These seven species are Przewalski’s horse (Equus ferus Przewalskii), Siberian Ibex (Capra sibirica), Black-tailed gazelle (Gazella subgutturosa), Saiga antelope (Saiga borealis), Mongolian gazelle (Procapra gutturosa) and Wild boar (Sus scrofa nigripes) – permanent inhabitants of Khomyn Tal, while Snow leopard (Panthera uncia) can be occasionally found in northern mountains.",
    },
    {
      title: "141 species of bird recorded in Khomyn tal",
      images: [coll1.src, coll2.src, coll3.src, coll4.src],
      desc: "Khomyn Tal is rich in bird diversity as many of waterfowls, raptors and steppe birds can be found. The lakes of Khar Nuur, Durgon and Baganuur and the rivers of Zavkhan and Teel are major areas for water birds. A small lake named Baganuur was listed as an Important Bird Area (IBA) by Birdlife International in 2005. 45 out of 141 bird species are registered in global, national or regional red lists.",
    },
    {
      title: "Flora",
      images: [coll1.src, coll2.src, coll3.src, coll4.src],
      desc: "Flora Six xeric types of vegetation dominant in the steppe zone (hard steppe, speargrass sand steppe, foothill steppe, wormwood steppe, rocky hill) found in Khomyn Tal cover 88.86% of the entire area. The eponym is predominated in vast community of Psammochloa villosa, whereas Stipa glareosa/gobica predominant among other significant species cover remaining five vegetation types. Mesic vegetation types (reed bed, wet riverbed meadow, elymus sand steppe) constitute 11.14% of Khomyn Tal area, found mainly in wetlands and lake shores. Stipa glareosa is a dominant grass of the steppe whereas a similar species of Stipa gobica is found in desert steppe community near Seer Mountain in the east, both of which have the highest nutrition value for Przewalski’s horses and ungulates in KTNP.  In total, 134 species of plants are registered in Khomyn Tal. Vegetation communities Desert steppe (dominated by Anabasis brevifolia, Reaumura soongorica) Reaumura steppe with Artemisia Klementzae (R. soongorica, Artemisia klementzae) Sand-steppe with stipa: (Stipa glareosa, Artemisia klementzae, A. xerophytica) Sand-steppe with Psammochloa (Psammochloa villosa – Artemisia klementzae) Mountain steppe (Caragana leucophlea, Eurotia ceratoides, Stipa glareosa) Rocky hill community Sand-steppe with Elymus: (Elymus paboanus, P.Sibiricum) Riverbed community: (Calamagrostis epigeos, Carex duriuscula) Reedbed community (Phragmites communis)",
    },
    {
      title: "Landscape",
      images: [coll1.src, coll2.src, coll3.src, coll4.src],
      desc: "KTNP shows a great complexity of landscape diversity including wetlands, sand dunes, mountain and desert steppes and riparian forest.",
    },
  ];
  return (
    <div className="flex flex-col w-full container items-center gap-20">
      <div className="flex flex-col w-full items-center gap-20 ">
        <div className="w-full">
          {ourworks
            ?.filter(
              (data) =>
                data.contenttype.name_en === "takhi-conservation-programs-intro"
            )
            ?.map((data) => (
              <IntroSection
                selectedLanguage={selectedLanguage}
                filteredData={data}
              />
            ))}
        </div>
        <div className="w-full flex flex-col gap-10 mt-20 sm:mt-32">
          {ourworks
            ?.filter(
              (data) =>
                data.contenttype.name_en === "takhi-conservation-programs-map-1"
            )
            ?.map((data) => (
              <MapRISection
                selectedLanguage={selectedLanguage}
                filteredData={data}
              />
            ))}
          {ourworks
            ?.filter(
              (data) =>
                data.contenttype.name_en === "takhi-conservation-programs-map-2"
            )
            ?.map((data) => (
              <MapRISection1
                selectedLanguage={selectedLanguage}
                filteredData={data}
              />
            ))}
        </div>

        {/* <GraphDataSection /> */}
        <div className="w-full flex flex-col gap-10">
          {ourworks
            ?.filter(
              (data) =>
                data.contenttype.name_en ===
                "takhi-conservation-programs-slider-1"
            )
            ?.map((data) => (
              <PhotoSliderReIntro
                selectedLanguage={selectedLanguage}
                filteredData={data}
              />
            ))}
        </div>
        <div className="w-full flex flex-col gap-20">
          {ourworks
            ?.filter(
              (data) =>
                data.contenttype.name_en ===
                "takhi-conservation-programs-cardphoto"
            )
            ?.map((data) => (
              <CardPhoto
                selectedLanguage={selectedLanguage}
                filteredData={data}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col justify-center w-full items-center container gap-10 ">
        <h1 className="text-[44px] sm:[64px] w-full">Wildlife Conservation</h1>
        <div className="w-full flex flex-col gap-20">
          {ourworks
            ?.filter(
              (data) =>
                data.contenttype.name_en ===
                "takhi-conservation-programs-intro-2"
            )
            ?.map((data) => (
              <HeroSection
                selectedLanguage={selectedLanguage}
                filteredData={data}
              />
            ))}
        </div>
        <div className="w-full flex flex-col gap-20">
          {ourworks
            ?.filter(
              (data) =>
                data.contenttype.name_en ===
                "takhi-conservation-programs-slider-2"
            )
            ?.map((data) => (
              <PhotoSliderSection
                selectedLanguage={selectedLanguage}
                filteredData={data}
              />
            ))}
        </div>

        <LearnMoreSection />
      </div>
    </div>
  );
};

export default TakhiConservationPrograms;
