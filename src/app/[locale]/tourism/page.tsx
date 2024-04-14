import React from "react";
import CampMenu from "./components/CampMenu";
import NewImageScroller from "./components/NewImageScroller";

import CampPage from "./components/CampPage";
import { Metadata } from "next";
type Props = {};

export const metadata: Metadata = {
  title: "Takhi Eco Camp",
  description: "Takhi Eco camp, Przewalski's horses and Mongolian ger ",
  keywords:
    "takhi, takhi reintroduction, takhi camp, camp,rangers, nature, tourism ,tour guide, Przewalski's horses, przewalski, mongolian ger ",
};

const TourismPage = (props: Props) => {
  return (
    <div className="bg-background text-foreground">
      <NewImageScroller />
      <CampMenu page={"camp"} />
      <section className="container">
        <CampPage />
      </section>
    </div>
  );
};

export default TourismPage;
