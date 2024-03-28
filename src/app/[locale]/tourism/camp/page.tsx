import React from "react";
import ImageScroller from "../components/ImageScroller";
import CampMenu from "../components/CampMenu";
import NewImageScroller from "../components/NewImageScroller";

type Props = {};

const CampPage = (props: Props) => {
  return (
    <div>
      <NewImageScroller />
      <CampMenu />
    </div>
  );
};

export default CampPage;
