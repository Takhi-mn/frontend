import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import IntroSection from "./components/intro-section";
import MapSection from "./components/map-section";
import GraphDataSection from "./components/graph-data-section";
import PhotoSliderSection from "./components/photo-slider-section";
import CardPhoto from "./components/card-photo";

const ReIntroductionPage = () => {
  return (
    <div className="mx-auto px-44 bg-background flex flex-col items-center gap-20 ">
      <h1 className="text-6xl">Takhi Reintroduction</h1>
      <IntroSection />
      <MapSection />
      <GraphDataSection />
      <PhotoSliderSection />
      <CardPhoto />
      <CardPhoto />
    </div>
  );
};

export default ReIntroductionPage;
