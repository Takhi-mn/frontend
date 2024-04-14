"use client";
import { TourismContext } from "@/context/TourismProvider";
import React, { useContext, useEffect, useState } from "react";
import NewImageScroller from "../components/NewImageScroller";
import CampMenu from "../components/CampMenu";
import { INews } from "@/types/backend";
import { useLanguage } from "@/context/LanguageProvider";
import CampSection2 from "../components/CampSection2";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import CampSection1 from "../components/CampSection1";
import { contentConverter } from "@/lib/nameConverter";
import BookingCard from "../booking/components/BookingCard";
import OneTourSkeleton from "./OneTourSkeleton";

type Props = {};

const TourPage = ({ params }: { params: { id: string } }) => {
  const { bookingData, getBookingData } = useContext(TourismContext);
  const [oneTour, setOneTour] = useState<INews[]>();
  const [oneTourHighlight, setOneTourHighlight] = useState<INews[]>();
  const [oneTourPrice, setOneTourPrice] = useState<INews[]>();
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!bookingData) {
      getBookingData();
    }
  }, []);
  useEffect(() => {
    if (bookingData) {
      setOneTour(bookingData?.filter((data) => data.id === params.id));
    }
  }, [bookingData]);
  useEffect(() => {
    if (oneTour) {
      setOneTourHighlight(
        bookingData
          ?.filter(
            (data) => data.taxonomy.name_en === oneTour[0].taxonomy.name_en
          )
          .filter(
            (filteredData) =>
              filteredData.contenttype.name_en === "tourism-tours-highlight"
          )
      );
      setOneTourPrice(
        bookingData
          ?.filter(
            (data) => data.taxonomy.name_en === oneTour[0].taxonomy.name_en
          )
          .filter(
            (filteredData) =>
              filteredData.contenttype.name_en === "tourism-tours-price"
          )
      );
    }
  }, [oneTour]);
  const router = useRouter();
  return (
    <div className="bg-background text-foreground pb-10">
      <NewImageScroller />
      <CampMenu page={"booking"} />

      {!oneTour ? (
        <OneTourSkeleton />
      ) : (
        <section className="container">
          <div
            onClick={() => {
              router.back();
            }}
            className="flex items-center gap-10 mt-10 cursor-pointer"
          >
            <IoIosArrowBack />
            <p>Back</p>
          </div>
          {oneTour?.map((data) => (
            <CampSection2 data={data} selectedLanguage={selectedLanguage} />
          ))}
          <div>
            <h1 className="text-2xl font-bold mb-14 text-center">
              Top Highlights
            </h1>
            {oneTourHighlight?.map((data) => (
              <PhotoSliderSmall photos={data.images} />
            ))}
          </div>
          {oneTourPrice?.map((data) => (
            <p
              className="text-center Prosemirror"
              dangerouslySetInnerHTML={{
                __html: contentConverter(data, selectedLanguage),
              }}
            ></p>
          ))}
          <BookingCard />
        </section>
      )}
    </div>
  );
};

export default TourPage;
