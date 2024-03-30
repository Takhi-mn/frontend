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

type Props = {};

const BookingPage = (props: Props) => {
  return (
    <div className="bg-background text-foreground">
      <NewImageScroller />
      <CampMenu page={"booking"} />
      <div className="flex flex-col items-center container mt-10 w-full p-6 sm:p-16 sm:px-28">
        <h1 className="text-xl md:text-4xl font-semibold">
          Welcome to TAKHI ECO CAMP in
        </h1>
        <h3 className="font-semibold mt-10 md:text-2xl">
          Welcome to TAKHI ECO CAMP in
        </h3>
        <h4 className="font-semibold md:text-2xl">Khomyn Tal National Park</h4>
        <p className="mt-4 md:text-xl">
          Watching Przewalski's horses in the vastness of the steppe and dunes,
          seeing Siberian ibex, Mongolian gazelles, Taiga antelopes and wolf
          tracks in the sand, admiring a steppe eagle in the sky: the protected
          reserve in the Seer Mountain,1400 kilometers west of Ulaanbaatar, is
          the ideal place for tourists and Eco volunteers wishing to contribute
          to the protection of the last wild horses with the association KTT. A
          handful of yurts and a building offering sanitary facilities, showers,
          and restaurant, inaugurated in September 2022, serve as a base for
          travelers. You will see the wild horses and better understand the
          importance of protecting them, observe fauna and flora in a preserved
          nature, between steppe, dunes, rivers and lakes and meet the nomads
          who live in the Khomyn Tal National Park. An Eco volunteer program is
          developed, for those who wish to actively help the rangers on a daily
          basis. We look forward to welcoming you and sharing with you our
          passion for Przewalski's horse and the beautiful landscapes of Khomyn
          tal.
        </p>
        <div className="flex flex-wrap md:gap-4 gap-10 justify-center lg:justify-between my-14">
          {tourismData.map((tourism, index) => (
            <div className="" key={tourism.title + index}>
              <TourCard tourism={tourism} />
            </div>
          ))}
        </div>
        <Image
          src={path.src}
          width={1000}
          height={700}
          alt="map"
          className="w-full"
        />
        <BookingCard />
        <PartnerSection />
        <Contact />
      </div>
    </div>
  );
};

export default BookingPage;
