import React from "react";
import CampMenu from "./components/CampMenu";
import NewImageScroller from "./components/NewImageScroller";

import CampPage from "./components/CampPage";
type Props = {};

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
