import React from "react";
import DesktopHistory from "./DesktopHistory";
import MobileHistory from "./MobileHistory";

type Props = {};

const HistorySection = (props: Props) => {
  return (
    <div>
      <DesktopHistory />
      <MobileHistory />
    </div>
  );
};

export default HistorySection;
