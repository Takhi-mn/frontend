import React from "react";
import ImageScroller from "../components/ImageScroller";
import CampMenu from "../components/CampMenu";

type Props = {};

const CampPage = (props: Props) => {
  return (
    <div>
      <ImageScroller />
      <CampMenu />
    </div>
  );
};

export default CampPage;
