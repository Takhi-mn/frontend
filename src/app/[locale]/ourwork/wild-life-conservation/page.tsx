import { coll1, coll2, coll3, coll4, map } from "@/assets";
import PhotoSlider from "@/components/photoSlider";
import Image from "next/image";
import React from "react";
import PhotoSliderSection from "./components/photo-slider-section";
import LearnMoreSection from "../components/learnMoreSection";

const WildLifeConservation = () => {
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
    <div className="flex flex-col justify-center w-screen items-center container gap-10 ">
      <h1 className="text-[44px] sm:[64px] w-full">Wildlife Conservation</h1>
      <div className="flex justify-between items-center gap-10 w-full flex-wrap">
        <Image
          src={map.src}
          width={0}
          height={0}
          sizes="100vw"
          alt={map.src}
          style={{
            borderRadius: "8px",
            objectFit: "cover",
            width: "100%",
            maxWidth: "700px",
            minHeight: "150px",
          }}
        />
        <h1 className=" min-w-[300px] text-[22px] max-w-[500px] font-semibold sm:text-[44px] sm:font-normal">
          Khomyn Tal, an area dominated by desert steppe and arid steppe, is
          located in the Great Lakes Depression in Western Mongolia.
        </h1>
        <p className="text-center text-lg">
          Khomyn Tal contains the north-western edge of Ikh Mongol Els National
          Park, extensive area covered by sand dunes, as well as critical
          wetlands such as Khar Nuur, Baganuur and Durgon lakes and Zavkhan and
          Teel rivers. It is a geographically isolated 2900 km2 natural island
          surrounded by inter-connected lakes and rivers in the west, north and
          east and sand dunes along the southern border.
        </p>
      </div>
      {datas.map((data) => (
        <PhotoSliderSection data={data} />
      ))}

      <LearnMoreSection />
    </div>
  );
};

export default WildLifeConservation;
