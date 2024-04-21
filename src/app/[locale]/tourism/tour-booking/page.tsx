import React from "react";
import CampMenu from "../components/CampMenu";
import NewImageScroller from "../components/NewImageScroller";
import { tourismData } from "@/data/camp";
import TourCard from "./components/TourCard";
import Image from "next/image";
import { path } from "@/assets";
import BookingCard from "./components/BookingCard";
import { PartnerSection } from "@/components";
import Contact from "./components/Contact";
import TourPath from "./components/TourPath";
import BookingPageComp from "./components/BookingPage";

type Props = {};

const BookingPage = (props: Props) => {
  return (
    <div className="bg-background text-foreground">
      <NewImageScroller />
      <CampMenu page={"booking"} />
      <BookingPageComp />
    </div>
  );
};

export default BookingPage;
