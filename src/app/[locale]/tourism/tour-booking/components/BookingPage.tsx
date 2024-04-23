"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { TourismContext } from "@/context/TourismProvider";
import { nameConverter } from "@/lib/nameConverter";
import React, { useContext, useEffect } from "react";
import CampSection1 from "../../components/CampSection1";
import BookingCard from "./BookingCard";
import TourCard from "./TourCard";
import TourPath from "./TourPath";

type Props = {};

const BookingPageComp = (props: Props) => {
  const { bookingData, getBookingData } = useContext(TourismContext);
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    if (!bookingData) {
      getBookingData();
    }
  }, []);
  return (
    <div className="flex flex-col items-center container mt-10 w-full p-6 sm:p-16 sm:px-28">
      {bookingData
        ?.filter(
          (data) => data.contenttype.name_en === "tourism-booking-section"
        )
        .map((filteredData) => (
          <CampSection1
            key={filteredData.id}
            data={filteredData}
            selectedLanguage={selectedLanguage}
          />
        ))}
      <div className="flex flex-wrap md:gap-16 gap-10 my-14 justify-center">
        {bookingData
          ?.filter((data) => data.contenttype.name_en === "tourism-tours")
          .map((tourism, index) => (
            <div className="" key={tourism.id + index}>
              <TourCard tourism={tourism} selectedLanguage={selectedLanguage} />
            </div>
          ))}
      </div>
      <TourPath />
      <BookingCard
        trips={bookingData?.filter((data) => {
          return data.contenttype.name_en === "tourism-tours";
        })}
      />
      {/* <PartnerSection /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default BookingPageComp;
