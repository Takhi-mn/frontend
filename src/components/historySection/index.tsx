"use client";
import { useContext, useEffect, useState } from "react";
import DesktopHistory from "./DesktopHistory";
import MobileHistory from "./MobileHistory";
import { dataContext } from "@/context/DataProvider";
import { IAboutUs } from "@/types/backend";
import GetContents from "@/actions/getContents";

type Props = {};

const HistorySection = (props: Props) => {
  const { aboutUs } = useContext(dataContext);
  const [historyDatas, setHistoryDatas] = useState<IAboutUs[]>();
  useEffect(() => {
    if (aboutUs) {
      setHistoryDatas(
        aboutUs.filter(
          (data) => data.contenttype.name_en === "our-history-section"
        )
      );
    }
  }, [aboutUs]);
  return (
    <div>
      <DesktopHistory historyDatas={historyDatas} />
      <MobileHistory historyDatas={historyDatas} />
    </div>
  );
};

export default HistorySection;
